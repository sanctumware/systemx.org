import React from 'react';
import xtend from 'xtend';

export default class Logo extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
  };

  render() {
    return (
      <div className={`bg-gray-10 ${this.props.className}`} style={xtend({
        height: 35,
        width: 15
      }, this.props.style)}></div>
    );
  }
}
