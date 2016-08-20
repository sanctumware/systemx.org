import React from 'react';
import Helmet from 'react-helmet';

import data from '../../../data';
import Nav from '../layout/nav';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={'about - kevin lin - rice university'} />
        <Nav selectedNav={'about'} />
        <div className="monospace iota" style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          height: '100vh',
          padding: '0 76px'
        }}>
          {
            data.about.map((line, idx) => (
              <p key={`${idx}_line`} className="margin--bottom light-link" dangerouslySetInnerHTML={{
                __html: line
              }} />
            ))
          }
        </div>
      </div>
    );
  }
}
