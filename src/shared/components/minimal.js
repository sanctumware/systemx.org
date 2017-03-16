import Helmet from 'react-helmet';
import React from 'react';

import Logo from './layout/logo';

const Minimal = () => (
  <div>
    <Helmet title={'kevin lin - rice university'} />
    <div className="minimal-top bg-gray-90" style={{height: '50vh'}} />

    <div className="text-center margin--bottom" style={{marginTop: '-115px'}}>
      <Logo className="margin--right" style={{display: 'inline-block'}} />
      <span className="sans-serif gamma text-gray-10">KEVIN LIN</span>
    </div>
    <p className="monospace iota text-gray-50 text-center">
      <span className="monospace bold text-gray-30">rice university</span> / eecs
    </p>
    <p className="monospace iota text-gray-50 text-center">
      <span className="monospace bold text-gray-30">pinterest</span> / software engineering intern
    </p>

    <div className="monospace iota light-link text-center margin-large--top">
      <span><a href="https://github.com/LINKIWI" className="margin--right">github</a></span>
      <span><a href="https://twitter.com/LINKIWI_" className="margin--right">twitter</a></span>
      <span><a href="https://blog.kevinlin.info" className="margin--right">blog</a></span>
      <span><a href="https://www.npmjs.com/~linkiwi" className="margin--right">npm</a></span>
      <span><a href="static/pdf/kevin-lin-resume.pdf">resume</a></span>
    </div>
  </div>
);

export default Minimal;
