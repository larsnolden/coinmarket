import { coinDataTypes } from "./types";
import axios from "axios";

const setCoinData = coins => ({
  type: coinDataTypes.setCoinData,
  coins
});

const setNumberOfCoins = numberOfCoins => ({
  type: coinDataTypes.setNumberOfCoins,
  numberOfCoins
});

export const getCoinData = ({ count }) => async dispatch => {
  try {
    const data = await axios.get(
      `https://api.coinmarketcap.com/v2/ticker/?limit=${count}&structure=array`
    );
    const coins = data.data.data.map(coin => ({
      name: coin.name,
      rank: coin.rank,
      price: coin.quotes.USD.price,
      percentChange24: coin.quotes.USD.percent_change_24h,
      volume24: coin.quotes.USD.volume_24h,
      marketCap: coin.quotes.USD.market_cap
    }));

    if (coins) {
      dispatch(setCoinData(coins));
      dispatch(setCoinsVisibleData(coins));
    }
  } catch (err) {
    alert(`Error fetching coins: ${err}`);
  }
};

const setCoinsVisibleData = coinsVisible => ({
  type: coinDataTypes.setCoinsVisibleData,
  coinsVisible
});

export const handleCoinNumChange = numberOfCoins => (dispatch, getState) => {
  const state = getState();

  if(numberOfCoins !==  state.coinData.numberOfCoins) {
    dispatch(setNumberOfCoins(numberOfCoins));
    
    const fetchedCoins = getState().coinData.coins;
    const visibleCoins = fetchedCoins.slice(0, numberOfCoins);
    console.log(visibleCoins)
    dispatch(setCoinsVisibleData(visibleCoins));
  }
};
