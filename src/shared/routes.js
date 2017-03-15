import React from 'react';
import {Route} from 'react-router';

import AppRoot from './components/app-root';
import About from './components/sections/about';
import Contact from './components/sections/contact';
import Experience from './components/sections/experience';
import Minimal from './components/minimal';
import Projects from './components/sections/projects';
import Stats from './components/sections/stats';

export default (
  <Route component={AppRoot}>
    <Route path="/about" component={About} />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="/stats" component={Stats} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={Minimal} />
  </Route>
);
