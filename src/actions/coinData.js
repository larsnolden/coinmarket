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
      `https://api.coinmarketcap.com/v2/ticker/?limit=${count}`
    );
    const coins = Object.values(data.data.data).map(coin => ({
      name: coin.name,
      rank: coin.rank,
      price: coin.quotes.USD.price,
      percentChange24: coin.quotes.USD.percent_change_24h,
      volume24: coin.quotes.USD.volume_24h,
      marketCap: coin.quotes.USD.market_cap
    }));

    if (coins) {
      dispatch(setCoinData(coins));
    }
  } catch (err) {
    alert(`Error fetching coins: ${err}`);
  }
};

export const handleCoinNumChange = numberOfCoins => (dispatch, getState) => {
  dispatch(setNumberOfCoins(numberOfCoins));

  //  only fetch coins that we did not fetch yet
  const coinsFetched = getState().coinData.coins.length;
  if (numberOfCoins > coinsFetched || 0)
    dispatch(getCoinData({ count: numberOfCoins }));
};
