/* global config, document */
/* eslint-disable no-unused-expressions */

import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import browserHistory from 'react-router/lib/browserHistory';
import dottie from 'dottie';
import {injectStyle} from 'styletron-utils';
import PiwikReactRouter from 'piwik-react-router';
import Raven from 'raven-js';
import React from 'react';
import Router from 'react-router/lib/Router';
import Styletron from 'styletron-client';
import {StyletronProvider} from 'styletron-react';
import useScroll from 'react-router-scroll/lib/useScroll';

import routes from './routes';

// Client-side Sentry initialization
Raven.config && Raven.config(dottie.get(config, 'sentry.dsn')).install();

// Piwik initialization
const piwik = config.piwikEnabled && PiwikReactRouter({
  url: 'https://analytics.internal.kevinlin.info',
  siteId: 1,
  clientTrackerName: 'client',
  serverTrackerName: 'server'
});

// Styletron initialization
const stylesheet = document.createElement('style');
document.head.appendChild(stylesheet);
const styletron = new Styletron([stylesheet]);

export const style = (styleObject) => injectStyle(styletron, styleObject);

/**
 * Main application parent component.
 *
 * @constructor
 */
const App = () => (
  <StyletronProvider styletron={styletron}>
    <Router
      history={piwik ? piwik.connectToHistory(browserHistory) : browserHistory}
      render={applyRouterMiddleware(useScroll())}
    >
      {routes}
    </Router>
  </StyletronProvider>
);

export default App;
