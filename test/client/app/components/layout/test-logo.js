import React from 'react';
import test from 'tape';

import Logo, {
  StyledLogo,
  StyledWordmark
} from '../../../../../src/client/app/components/layout/logo';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('Logo rendering', (t) => {
  const logo = mountWithStyletron(
    <Logo />
  );

  t.equal(logo.find(StyledLogo).length, 1, 'Styled logo element');
  t.equal(logo.find(StyledWordmark).length, 1, 'Styled wordmark element');

  t.end();
});
