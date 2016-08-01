import {Link} from 'react-router';
import React from 'react';

import Logo from './logo';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNav: 'about'
    }
  }

  classNameForSelected(nav) {
    if (this.state.selectedNav === nav) {
      return 'monospace bold gamma text-gray-10';
    }
    return 'monospace gamma text-gray-30'
  }

  setSelectedNav(nav) {
    this.setState({
      selectedNav: nav
    });
  }

  render() {
    return (
      <div className="bg-gray-90" style={{
        width: '35%',
        minWidth: 300,
        height: '100vh',
        padding: '36px 56px',
        float: 'left',
        display: 'inline-block'
      }}>
        <Logo className="margin--right" style={{
          display: 'inline-block'
        }} />
        <p className="sans-serif text-gray-10 gamma" style={{
          display: 'inline-block'
        }}>KEVIN LIN</p>
        <br />

        <div className="dark-link" style={{
          marginTop: 80
        }}>
          <div className="margin-small--bottom">
            <Link to="/about" className={this.classNameForSelected('about')} onClick={() => this.setSelectedNav('about')}>
              /about
            </Link>
          </div>
          <div className="margin-small--bottom">
            <Link to="/experience" className={this.classNameForSelected('experience')} onClick={() => this.setSelectedNav('experience')}>
              /experience
            </Link>
          </div>
          <div className="margin-small--bottom">
            <Link to="/projects" className={this.classNameForSelected('projects')} onClick={() => this.setSelectedNav('projects')}>
              /projects
            </Link>
          </div>
          <div className="margin-small--bottom">
            <Link to="/resume.pdf" className={this.classNameForSelected('resume')} onClick={() => this.setSelectedNav('resume')}>
              /resume.pdf
            </Link>
          </div>
        </div>

        <div className="dark-link" style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          margin: '36px 56px'
        }}>
          <p className="monospace iota text-gray-30 margin-tiny--bottom">
            built with <a href="https://github.com/facebook/react">react</a>
          </p>
          <p className="monospace iota text-gray-30">
            source on <a href="https://github.com/LINKIWI/kevinlin.info">github</a>
          </p>
        </div>
      </div>
    );
  }
}
