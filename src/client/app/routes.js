import React from 'react';
import Route from 'react-router/lib/Route';

import AppRoot from './components/app-root';
import Main from './components/main';

export default (
  <Route path="" component={AppRoot}>
    <Route path="*" component={Main} />
  </Route>
);
