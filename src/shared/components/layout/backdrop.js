import React from 'react';
import xtend from 'xtend';

export default class Backdrop extends React.Component {
  static propTypes = {
    opacity: React.PropTypes.number
  };
  static defaultProps = {
    opacity: 0
  };

  render() {
    const {opacity, style, children} = this.props;

    return (
      <div className="backdrop bg-gray-90 transition" style={xtend({
        width: '100%',
        height: '100vh',
        position: 'fixed',
        opacity: opacity,
        pointerEvents: 'none',
        zIndex: 100
      }, style)}>
        {children}
      </div>
    );
  }
}
