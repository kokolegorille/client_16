import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './app';
import Home from './views/home';
import About from './views/about';
import NoMatch from './views/no_match';

// http://stackoverflow.com/questions/42095600/nested-routes-in-v4

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </App>
);