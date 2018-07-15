import React from 'react';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import { 
  ConnectedRouter,
  routerMiddleware,
} from 'react-router-redux'

import Routes from 'Routes';
import rootReducer from 'reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Routes/>
    </ConnectedRouter>
  </Provider>
);
