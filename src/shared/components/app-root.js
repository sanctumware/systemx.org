import React from 'react';

import Splash from './splash';

export default class AppRoot extends React.Component {
  render() {
    return (
      <div className="app-root">
        <Splash />
        {this.props.children}
      </div>
    );
  }
}
