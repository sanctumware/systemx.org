import browserHistory from 'react-router/lib/browserHistory';
import KeyboardBackspace from 'react-icons/lib/md/keyboard-backspace';
import React from 'react';

import {colors} from '../../../styles/colors';
import {Margin, MarginInline} from '../../../styles/margin';
import {PrimaryInline} from '../../../styles/fonts';

import Link from './link';

/**
 * Back arrow for reverse history navigation. Effectively, provides a UI component for programmatic
 * invocation of the browser's back button.
 */
const BackNav = () => (
  <Margin size="large" bottom>
    <Link to="/" style={{
      ':hover': {
        opacity: '1.0'
      },
      ':active': {
        color: colors.gray80
      }
    }}>
      <span onClick={browserHistory.goBack}>
        <MarginInline right>
          <KeyboardBackspace />
        </MarginInline>
        <PrimaryInline size="kilo" color bold>
          GO BACK
        </PrimaryInline>
      </span>
    </Link>
  </Margin>
);

export default BackNav;
