import {styled} from 'styletron-react';

import {colors} from './colors';

const DEFAULT_SIZE = 'iota';
const DEFAULT_COLOR = 'gray80';

export const sizes = {
  alpha: '60px',
  beta: '54px',
  delta: '36px',
  epsilon: '18px',
  gamma: '15px',
  iota: '13px',
  kilo: '12px',
  lambda: '10px'
};

// TODO pull default size, color into constant here

/**
 * Parameterized factory function for generating style objects with the primary font.
 *
 * @param {String} size Name of the font size, or a literal font size.
 * @param {String} color Name of the color, or a literal hex color ode.
 * @param {Boolean|String} bold True to use the bold font family; false otherwise.
 */
export const primaryFontStyle = (size = DEFAULT_SIZE, color = DEFAULT_COLOR, bold = false) => ({
  fontFamily: bold ? 'montserrat--regular' : 'montserrat--ultra-light',
  fontSize: sizes[size] || size,
  color: colors[color] || color
});

/**
 * Parameterized factory function for generating style objects with the secondary font.
 *
 * @param {String} size Name of the font size, or a literal font size.
 * @param {String} color Name of the color, or a literal hex color ode.
 * @param {Boolean|String} bold True to use the bold font family; false otherwise.
 */
export const secondaryFontStyle = (size = DEFAULT_SIZE, color = 'gray80', bold = false) => ({
  fontFamily: bold ? 'inconsolata--bold' : 'inconsolata--regular',
  fontSize: sizes[size] || size,
  color: colors[color] || color
});

/**
 * Create a styled component of the specified type, using the specified font factory function.
 *
 * @param {String} element HTML element type.
 * @param {Function} styleFactory One of primaryFontStyle or secondaryFontStyle.
 */
const createStyledFont = (element, styleFactory) => styled(element, ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  bold = false
}) => styleFactory(size, color, bold));

/**
 * Component for a styled paragraph element with the primary font.
 */
export const Primary = createStyledFont('p', primaryFontStyle);

/**
 * Component for a styled paragraph element with the secondary font.
 */
export const Secondary = createStyledFont('p', secondaryFontStyle);

/**
 * Component for a styled span element with the primary font.
 */
export const PrimaryInline = createStyledFont('span', primaryFontStyle);

/**
 * Component for a styled span element with the secondary font.
 */
export const SecondaryInline = createStyledFont('span', secondaryFontStyle);
