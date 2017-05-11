import React from 'react';
import test from 'tape';

import Header from '../../../../../src/client/app/components/main/header';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('Header rendering', (t) => {
  const header = mountWithStyletron(
    <Header />
  );

  // It's a stateless functional component with only markup
  // There's not much to test
  t.ok(header, 'No errors in rendering');

  t.end();
});
