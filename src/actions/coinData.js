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


export const getCoinData = ({ initial }) => async dispatch => {
  try {
    let pageSize = 100;
    let coinsCount = 0;
    let coins = [];
    while (pageSize === 100) {
      const data = await axios.get(
        `https://api.coinmarketcap.com/v2/ticker/?start=${coinsCount}&structure=array`
      );

      const currentCoins = data.data.data.map(coin => ({
        name: coin.name,
        rank: coin.rank,
        price: coin.quotes.USD.price,
        percentChange24: coin.quotes.USD.percent_change_24h,
        volume24: coin.quotes.USD.volume_24h,
        marketCap: coin.quotes.USD.market_cap
      }));
      coins = [...coins, ...currentCoins];
      pageSize = currentCoins.length;
      coinsCount = coinsCount + 100;
      if(initial) break;
    }

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

  //  only evaluate when value change
  if(numberOfCoins !==  state.coinData.numberOfCoins) {
    const fetchedCoins = getState().coinData.coins;

      //  we only fetched the ininital coin list, now fetch all
    if(numberOfCoins === 0 && fetchedCoins.length === 100) {
      dispatch(getCoinData({ initial: false}))
    }
    dispatch(setNumberOfCoins(numberOfCoins));
    
    const visibleCoins = numberOfCoins !== 0 ? fetchedCoins.slice(0, numberOfCoins) : fetchedCoins;
    dispatch(setCoinsVisibleData(visibleCoins));
  }
};
