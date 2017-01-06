import React from 'react';
import Helmet from 'react-helmet';

import data from '../../../data';
import Nav from '../layout/nav';

export default class Contact extends React.Component {
  constructor() {
    super();

    this.state = {showPGPKey: false};
  }

  showPGPKey() {
    this.setState({showPGPKey: true});
  }

  render() {
    const {showPGPKey} = this.state;

    return (
      <div>
        <Helmet title={'contact - kevin lin - rice university'}/>
        <Nav selectedNav={'contact'}/>
        <div style={{
          maxHeight: '100vh',
          overflow: 'auto'
        }}>
          <div className="monospace iota light-link" style={{
            display: 'table-cell',
            height: '100vh',
            verticalAlign: 'middle',
            padding: '0 76px',
            marginTop: '56px'
          }}>
            <p className="margin-small--bottom">
              i can be reached via email.
            </p>
            <p className="monospace bold kilo margin-small--bottom">
              const addr = window.location.href;<br />
              const host = url.parse(addr).host;<br />
              const mailto = `hello@${'{'}host{'}'}`;
            </p>

            <p className="margin-small--bottom">
              i also do <a href="https://xkcd.com/1181/">authentic emails</a>:
            </p>
            {
              showPGPKey ? (
                <div className="kilo">
                  {
                    data.contact.pgpKey.split('\n').map((line) => <p>{line}</p>)
                  }
                </div>
              ) : (
                <a
                  href="#"
                  className="kilo"
                  onClick={this.showPGPKey.bind(this)}
                >
                  click me to show
                </a>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
