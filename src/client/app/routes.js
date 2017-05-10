import React from 'react';
import Route from 'react-router/lib/Route';

import AppRoot from './components/app-root';
import Main from './components/main';
import Rice from './components/sections/rice';

export default (
  <Route path="" component={AppRoot}>
    <Route path="/education" component={Rice} />
    <Route path="*" component={Main} />
  </Route>
);
