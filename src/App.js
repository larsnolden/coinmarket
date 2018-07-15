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

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import pink from '@material-ui/core/colors/pink';

import Routes from 'Routes';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

import FetchHoc from 'elements/FetchHoc';

const history = createHistory();
const middleware = [routerMiddleware(history), thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: pink,
  },
});

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <FetchHoc>
        <ConnectedRouter history={history} >
          <Routes/>
        </ConnectedRouter>
      </FetchHoc>
    </MuiThemeProvider>
  </Provider>
);
