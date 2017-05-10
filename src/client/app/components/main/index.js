import Helmet from 'react-helmet';
import React from 'react';
import {styled} from 'styletron-react';

import Container from '../layout/container';
import ExternalLinks from './external-links';
import Header from './header';
import Logo from '../layout/logo';
import {Margin} from '../../../styles/margin';

import browser from '../../util/browser';

const Home = styled('span', {
  cursor: 'pointer'
});

/**
 * Main application component.
 *
 * @constructor
 */
const Main = () => (
  <Container>
    <Helmet title="kevin lin" />

    <Margin size="huge" bottom>
      <Home onClick={() => browser.push('/')}>
        <Logo color="gray80" />
      </Home>
    </Margin>

    <Margin size="huge" bottom>
      <Header />
    </Margin>

    <ExternalLinks />
  </Container>
);

export default Main;
