/* global setTimeout */

import React from 'react';

import Backdrop from './backdrop';
import Logo from './logo';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSplashContents: true,
      showBackdrop: true
    };
  }

  componentDidMount() {
    // Hide the logo block
    setTimeout(() => {
      this.setState({
        showSplashContents: false
      });
    }, 800);

    // Hide the backdrop
    setTimeout(() => {
      this.setState({
        showBackdrop: false
      });
    }, 1200);
  }

  render() {
    const {showBackdrop, showSplashContents} = this.state;

    return (
      <Backdrop opacity={showBackdrop ? 1 : 0}>
        <div className="splash-logo-block transition" style={{
          opacity: showSplashContents ? 1 : 0
        }}>
          <Logo scale={2} className="transition" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginLeft: '-100px'
          }} />
          <p className="sans-serif text-gray-10 epsilon transition" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: '25px',
            marginLeft: '20px'
          }}>KEVIN LIN</p>
        </div>
      </Backdrop>
    );
  }
}
