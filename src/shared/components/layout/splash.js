import React from 'react';

import Logo from './logo';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSplash: true,
      showSplashContents: true,
      showText: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSplash: false
      });
    }, 2200);
    setTimeout(() => {
      this.setState({
        showSplashContents: false
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        showText: true
      });
    }, 1000);
  }

  render() {
    const {showSplash, showSplashContents, showText} = this.state;

    return (
      <div className="bg-gray-90 transition" style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        opacity: showSplash ? 1 : 0,
        pointerEvents: 'none',
        zIndex: 100
      }}>
        <div style={{
          display: showSplashContents ? 'inherit' : 'none'
        }}>
          <Logo scale={2} className="pulse transition" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            marginLeft: showText ? '-80px' : 0
          }} />
          <div style={{
            opacity: showText ? 1 : 0
          }}>
            <p className="sans-serif text-gray-10 epsilon pulse transition" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              marginTop: '25px',
              marginLeft: showText ? '30px' : 0
            }}>KEVIN LIN</p>
          </div>
        </div>
      </div>
    );
  }
}
