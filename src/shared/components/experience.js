import React from 'react';
import Helmet from 'react-helmet';

import data from '../../data';
import Nav from './nav';

export default class Experience extends React.Component {
  renderSection(item, idx, arr) {
    return (
      <div key={`${idx}_item`} className={`monospace light-link text-gray-80 ${idx === arr.length - 1 ? '' : 'margin-large--bottom'}`}>
        <p className="monospace bold">
          # {item.title.toLowerCase()}
        </p>
        <p className="margin-small--bottom text-gray-80">
          ### {item.subtitle.toLowerCase()}
        </p>
        <p className="margin-small--bottom text-gray-50">
          *{item.comment.toLowerCase()}*
        </p>
        {
          item.description.map((item, idx) => (
            <p key={`${idx}_bullet`} className="text-gray-80" dangerouslySetInnerHTML={{
              __html: `+ ${item}`
            }} />
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Helmet title={'experience - kevin lin - rice university'} />
        <Nav selectedNav={'experience'} />
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
            {data.experience.map(this.renderSection)}
          </div>
        </div>
      </div>
    );
  }
}
