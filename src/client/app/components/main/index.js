import Helmet from 'react-helmet';
import React from 'react';

import Container from '../layout/container';
import ExternalLinks from './external-links';
import Header from './header';
import Logo from '../layout/logo';
import {Margin} from '../../../styles/margin';

/**
 * Main application component.
 *
 * @constructor
 */
const Main = () => (
  <Container>
    <Helmet title="kevin lin" />

    <Margin size="huge" bottom>
      <Logo color="gray80" />
    </Margin>

    <Margin size="huge" bottom>
      <Header />
    </Margin>

    <ExternalLinks />
  </Container>
);

export default Main;
