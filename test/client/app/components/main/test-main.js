import React from 'react';
import test from 'tape';

import Main from '../../../../../src/client/app/components/main';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('Main container rendering', (t) => {
  const main = mountWithStyletron(
    <Main />
  );

  t.equal(main.find('Header').length, 1, 'Header component');
  t.equal(main.find('ExternalLinks').length, 1, 'ExternalLinks component');

  t.end();
});
