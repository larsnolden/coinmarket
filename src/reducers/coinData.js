import { coinDataTypes } from 'actions/types';

const initialState = {
  coins: [],
  coinsVisible: [],
  numberOfCoins: 100,
};

export default function coinData(state = initialState, action) {
  switch(action.type) {
    case coinDataTypes.setCoinData:
      console.log('coinData', action.coins)
      return {
        ...state,
        coins: action.coins,
      }

    case coinDataTypes.setCoinsVisibleData:
      return {
        ...state,
        coinsVisible: action.coinsVisible,
      }

    case coinDataTypes.setNumberOfCoins:
      return {
        ...state,
        numberOfCoins: action.numberOfCoins,
      }

    default:
      return state
  }
}
