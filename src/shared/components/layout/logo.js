import React from 'react';
import xtend from 'xtend';

export default class Logo extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    scale: React.PropTypes.number
  };
  static defaultProps = {
    scale: 1
  };

  render() {
    return (
      <div className={`bg-gray-10 ${this.props.className}`} style={xtend({
        height: 35 * this.props.scale,
        width: 15 * this.props.scale
      }, this.props.style)}></div>
    );
  }
}
