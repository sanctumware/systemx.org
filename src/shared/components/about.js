import React from 'react';
import Helmet from 'react-helmet';

import Nav from './nav';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={'kevin lin'} />
        <Nav />
        <div style={{
          display: 'inline-block',
          padding: '56px 76px'
        }}>
          <p className="sans-serif regular text-gray-80 delta margin--bottom">
            ABOUT
          </p>

          <p className="monospace">
            TODO
          </p>
        </div>
      </div>
    );
  }
}
