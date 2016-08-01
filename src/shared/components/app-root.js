import React from 'react';

export default class AppRoot extends React.Component {
  render() {
    return (
      <div className="app-root">
        {this.props.children}
      </div>
    );
  }
}
