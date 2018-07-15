import { coinDataTypes } from 'actions/types';

const initialState = {
  coinData: [],
};

export default function coinData(state = initialState, action) {
  switch(action.type) {
    case coinDataTypes.setCoinData:
      return {
        ...state,
        coinData: action.coins,
      }

    default:
      return state
  }
}
