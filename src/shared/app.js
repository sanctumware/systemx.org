import PiwikReactRouter from 'piwik-react-router';
import React from 'react';
import {Router, browserHistory} from 'react-router';

import routes from './routes';

const piwik = PiwikReactRouter({
  url: 'https://analytics.internal.kevinlin.info',
  siteId: 1
});

const App = () => (
  <Router history={piwik.connectToHistory(browserHistory)}>
    {routes}
  </Router>
);

export default App;
