import { coinDataTypes } from 'actions/types';

const initialState = {
  coinData: [],
  numberOfCoins: 100,
};

export default function coinData(state = initialState, action) {
  switch(action.type) {
    case coinDataTypes.setCoinData:
      return {
        ...state,
        coinData: action.coins,
      }

    case coinDataTypes.setNumberOfCoins:
      console.log('action.numberOfCoins', action.numberOfCoins)
      return {
        ...state,
        numberOfCoins: action.numberOfCoins,
      }

    default:
      return state
  }
}
