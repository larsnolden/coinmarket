import React from 'react';
import { 
  Route,
  Redirect,
 } from 'react-router';
import Liquidity from 'views/liquidity/components/Liquidity';
import Overview from 'views/overview/container/Overview';

export default () => (
  <div>
    <Redirect from="/" to="overview" />
    <Route path="/overview" component={Overview} />
    <Route path="/liquidity" component={Liquidity} />
  </div>
);
