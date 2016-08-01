import React from 'react';
import {IndexRedirect, Route} from 'react-router';

import AppRoot from './components/app-root';
import About from './components/about';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRedirect to="/about" />
    <Route path="/about" component={About} />
    <Route path="*" component={About} />
  </Route>
)
