import {browserHistory, Link} from 'react-router';
import MediaQuery from 'react-responsive';
import React from 'react';
import xtend from 'xtend';

import {DESKTOP_MEDIA_QUERY, COMPACT_MEDIA_QUERY, ULTRA_COMPACT_MEDIA_QUERY} from '../util/media-query';
import DisplayUtil from '../util/display';
import Logo from './logo';

export default class Nav extends React.Component {
  static propTypes = {
    selectedNav: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      isLogoMouseOver: false
    }
  }

  colorForSelectedNav() {
    switch (this.props.selectedNav) {
      case 'experience':
        return '#1D2936';
      case 'projects':
        return '#0D4023';
      case 'stats':
        return '#4F1711';
      default:
        return '#191919';
    }
  }

  classNameForSelected(nav) {
    if (this.props.selectedNav === nav) {
      return 'monospace bold gamma text-gray-10';
    }
    return 'monospace gamma text-gray-30'
  }

  setLogoMouseOver(isLogoMouseOver) {
    this.setState({isLogoMouseOver});
  }

  renderLogoBlock(style) {
    return (
      <div
        className="margin-large--right"
        style={xtend({
          cursor: 'pointer'
        }, style)}
        onClick={() => {
          browserHistory.push('/');
        }}
        onMouseOver={() => {
          this.setLogoMouseOver(true)
        }}
        onMouseOut={() => {
          this.setLogoMouseOver(false)
        }}
      >
        <Logo className={`margin--right transition ${this.state.isLogoMouseOver ? 'bg-blue' : ''}`} style={{
          display: 'inline-block'
        }} />
        <p className={`sans-serif text-gray-10 gamma transition ${this.state.isLogoMouseOver ? 'text-blue' : ''}`} style={{
          display: 'inline-block'
        }}>KEVIN LIN</p>
        <br />
      </div>
    );
  }

  renderNavLinks(renderVertically, style) {
    return (
      <div className="dark-link-alt" style={xtend({
        marginTop: renderVertically ? 80 : 0
      }, style)}>
        {
          [
            'about',
            'experience',
            'projects',
            'stats',
            'resume.pdf'
          ].map((link) => (
            <div key={`${link}_link`} className={renderVertically ? 'margin-small--bottom' : 'margin-small--right'} style={{
              display: renderVertically ? 'inherit' : 'inline-block'
            }}>
              {
                DisplayUtil.displayIf(link.indexOf('.') === -1, () => (
                  <Link to={`/${link}`} className={this.classNameForSelected(link)}>
                    /{link}
                  </Link>
                ), () => (
                  <a href={`/${link}`} className={this.classNameForSelected(link)}>
                    /{link}
                  </a>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }

  renderNavFooter() {
    return (
      <div className="monospace kilo text-gray-30 dark-link-alt" style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        margin: '36px 56px'
      }}>
        <p className="margin-tiny--bottom">
          built with <a href="https://github.com/facebook/react">react</a>
        </p>
        <p>
          source on <a href="https://github.com/LINKIWI/kevinlin.info">github</a>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <MediaQuery query={DESKTOP_MEDIA_QUERY}>
          <div style={{
            backgroundColor: this.colorForSelectedNav(),
            width: '35%',
            minWidth: 300,
            height: '100vh',
            padding: '0 56px',
            float: 'left',
            display: 'inline-block'
          }}>
            {this.renderLogoBlock({marginTop: 36})}
            {this.renderNavLinks(true)}
            {this.renderNavFooter()}
          </div>
        </MediaQuery>

        <MediaQuery query={COMPACT_MEDIA_QUERY}>
          <div style={{
            backgroundColor: this.colorForSelectedNav(),
            width: '100%',
            padding: '24px 0'
          }}>
            {this.renderLogoBlock({display: 'inline-block', marginLeft: 36})}
            {this.renderNavLinks(false, {display: 'inline-block'})}
          </div>
        </MediaQuery>

        <MediaQuery query={ULTRA_COMPACT_MEDIA_QUERY}>
          <div style={{
            backgroundColor: this.colorForSelectedNav(),
            width: '100%',
            padding: '24px 0'
          }}>
            {this.renderNavLinks(false, {display: 'inline-block', marginLeft: 36})}
          </div>
        </MediaQuery>
      </div>
    );
  }
}
