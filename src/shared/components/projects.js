import React from 'react';
import Helmet from 'react-helmet';

import data from '../../data';
import Nav from './nav';

export default class Projects extends React.Component {
  renderSection(item, idx, arr) {
    return (
      <div key={`${idx}_item`} className={`monospace light-link text-gray-80 ${idx === arr.length - 1 ? '' : 'margin-large--bottom'}`}>
        <p className="monospace bold">
          # {item.title.toLowerCase()}
        </p>
        <p className="margin-small--bottom text-gray-80">
          ### {item.subtitle.toLowerCase()}
        </p>
        <p className="margin-small--bottom text-gray-80">
          {item.description.toLowerCase()}
        </p>
        {
          item.links.map((link) => (
            <div>
              <a key={`${link.text}_link`} href={link.url}>{link.text}</a>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Helmet title={'experience - kevin lin - rice university'} />
        <Nav selectedNav={'projects'} />
        <div style={{
          maxHeight: '100vh',
          overflow: 'auto'
        }}>
          <div className="monospace iota" style={{
            display: 'table-cell',
            height: '100vh',
            verticalAlign: 'middle',
            padding: '56px 76px',
            marginTop: '56px'
          }}>
            {data.projects.map(this.renderSection)}
          </div>
        </div>
      </div>
    );
  }
}
