import React from 'react';
import {IndexRoute, Route} from 'react-router';

import AppRoot from './components/app-root';
import Container from './components/container';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRoute component={Container} />
    <Route path="*" component={Container} />
  </Route>
)
