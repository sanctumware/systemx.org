import React from 'react';
import {styled} from 'styletron-react';

import {colors} from '../../styles/colors';
import {Margin} from '../../styles/margin';
import {Primary} from '../../styles/fonts';

const BASE_HEIGHT = 35;
const BASE_WIDTH = 15;
const WORDMARK_TEXT = 'Kevin Lin';

/**
 * Logo element.
 */
const StyledLogo = styled('div', ({scale, color}) => ({
  backgroundColor: colors[color] || color,
  display: 'inline-block',
  height: `${BASE_HEIGHT * scale}px`,
  width: `${BASE_WIDTH * scale}px`
}));

/**
 * Wordmark accompanying logo element.
 */
const StyledWordmark = styled('span', {
  display: 'inline-block'
});

/**
 * Logo with wordmark.
 *
 * @param {Number} scale Integer scale factor.
 * @param {String} color Color for the entire logo.
 * @constructor
 */
const Logo = ({scale = 1, color = 'gray10'}) => (
  <div>
    <StyledLogo scale={scale} color={color} />
    <StyledWordmark>
      <Margin left>
        <Primary color={color} size="gamma" bold>
          {WORDMARK_TEXT.toUpperCase()}
        </Primary>
      </Margin>
    </StyledWordmark>
  </div>
);

export default Logo;
