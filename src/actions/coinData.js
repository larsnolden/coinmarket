import { coinDataTypes } from './types';
import axios from 'axios';

const setCoinData = coins => ({
  type: coinDataTypes.setCoinData,
  coins,
});

const setNumberOfCoins = numberOfCoins => ({
  type: coinDataTypes.setNumberOfCoins,
  numberOfCoins,
});

export const getCoinData = ({ count }) => async (dispatch) => {
  try {
    const data = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${count}`);
    const coins = data.data.data;

    if (coins) {
      console.log(coins)
      dispatch(setCoinData({ coins }))
    }
  } catch (err) {
    alert(`Error fetching coins: ${err}`) 
  }

};

export const handleCoinNumChange = numberOfCoins => dispatch => {
  dispatch(setNumberOfCoins(numberOfCoins))
  dispatch(getCoinData({ count: numberOfCoins}));
};
