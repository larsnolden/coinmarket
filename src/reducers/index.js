import {
   combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';

import coinData from './coinData';

export default combineReducers({
  coinData,
  router: routerReducer,
});
