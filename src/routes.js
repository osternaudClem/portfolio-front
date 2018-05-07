import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import App from './layouts/App';

const Routes = () => (
  <Router>
    <LastLocationProvider>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </LastLocationProvider>
  </Router>
);
export default Routes;
