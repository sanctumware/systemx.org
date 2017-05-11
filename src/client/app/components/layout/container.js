import React from 'react';
import {styled} from 'styletron-react';

import Logo from './logo';
import {Margin} from '../../../styles/margin';
import Window from './window';

import browser from '../../util/browser';

export const Home = styled('span', {
  cursor: 'pointer'
});

export const Children = styled('div', {
  maxWidth: '500px'
});

/**
 * Container for all branded pages. Wraps all content in a responsive Window element with a logo
 * header.
 *
 * @param {XML} children Container elements.
 * @constructor
 */
const Container = ({children}) => (
  <Window>
    <Margin size="huge" bottom>
      <Home onClick={() => browser.push('/')}>
        <Logo color="gray80" />
      </Home>
    </Margin>

    <Children>
      {children}
    </Children>
  </Window>
);

export default Container;
