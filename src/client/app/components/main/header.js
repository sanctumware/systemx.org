import React from 'react';
import {styled} from 'styletron-react';
import {withWindowState} from 'react-window-state';

import {sizes} from '../../../styles/fonts';
import {Margin} from '../../../styles/margin';
import {Primary, PrimaryInline, primaryFontStyle} from '../../../styles/fonts';

import Link from '../ui/link';

/**
 * Determine the size of the primary about text.
 *
 * @param {Number} width Current screen width, in pixels.
 * @returns {String} Text size to use.
 */
const aboutTextSize = (width) => {
  if (width < 500) {
    return sizes.epsilon;
  }

  return sizes.delta;
};

/**
 * Styled about text element.
 */
const AboutText = styled('p', ({width}) => ({
  maxWidth: '500px',
  ...primaryFontStyle(aboutTextSize(width), 'gray70')
}));

/**
 * Primary header with about text, work experience, and education.
 *
 * @constructor
 */
const Header = ({win}) => (
  <div>
    <Margin bottom>
      <AboutText width={win.width}>
        i build products and infrastructure for the web.
      </AboutText>
    </Margin>

    <Margin size="tiny" bottom>
      <Primary>
        currently engineering&nbsp;
        <Link href="https://engineering.pinterest.com/">
          <PrimaryInline color bold>pinterest</PrimaryInline> / product eng
        </Link>
      </Primary>
    </Margin>

    <Margin size="tiny" bottom>
      <Primary>
        previously&nbsp;
        <Link href="https://eng.uber.com/">
          <PrimaryInline color bold>uber</PrimaryInline> / dev infrastructure
        </Link>
        ,&nbsp;
        <Link href="https://www.yelp.com/engineering">
          <PrimaryInline color bold>yelp</PrimaryInline> / web frontend
        </Link>
      </Primary>
    </Margin>

    <Primary>
      rising senior&nbsp;
      <Link to="/education">
        <PrimaryInline color bold>rice university</PrimaryInline>
        &nbsp;/ eecs
      </Link>
    </Primary>
  </div>
);

export default withWindowState(Header);
