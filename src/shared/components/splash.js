import React from 'react';

import Logo from './logo';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 0
      });
    }, 2000);
  }

  render() {
    return (
      <div className="bg-gray-90 transition" style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        opacity: this.state.opacity,
        pointerEvents: 'none',
        zIndex: 100
      }}>
        <Logo scale={2} className="pulse" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: this.state.opacity === 1 ? 'inherit' : 'none'
        }} />
      </div>
    );
  }
}
