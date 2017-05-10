/* global document */

import React from 'react';
import {withWindowState} from 'react-window-state';

import {Margin} from '../../../styles/margin';
import {spacing} from '../../../styles/margin';

const sideMarginSize = (width) => {
  if (width < 350) {
    return spacing.default;
  }
  if (width < 600) {
    return spacing.huge;
  }
  return spacing.enormous;
};

const verticalMarginSize = (width) => {
  if (width < 350) {
    return spacing.default;
  }
  if (width < 600) {
    return spacing.large;
  }
  return spacing.huge;
};

/**
 * Window element providing border margins, wrapping all children on a page. This is the highest-
 * level container, providing automated window margins that vary based on screen width.
 *
 * @param {Object} win Object containing window width and height; supplied by HOC.
 * @param {XML} children All enclosed children.
 * @constructor
 */
const Window = ({win, children}) => (
  <Margin size={verticalMarginSize(win.width || document.body.clientWidth)} top bottom>
    <Margin size={sideMarginSize(win.width || document.body.clientWidth)} left right>
      {children}
    </Margin>
  </Margin>
);

export default withWindowState(Window);
