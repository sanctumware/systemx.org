import React from 'react';
import {IndexRedirect, Route} from 'react-router';

import AppRoot from './components/app-root';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Stats from './components/sections/stats';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRedirect to="/about" />
    <Route path="/about" component={About} />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="/stats" component={Stats} />
    <Route path="*" component={About} />
  </Route>
)
