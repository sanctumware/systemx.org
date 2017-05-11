import React from 'react';
import RouterLink from 'react-router/lib/Link';
import test from 'tape';

import Link from '../../../../../src/client/app/components/ui/link';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('Link component for a regular link', (t) => {
  const link = mountWithStyletron(
    <Link href="https://google.com">
      contents
    </Link>
  );

  t.equal(link.find('a').length, 1, 'Regular link');
  t.equal(link.find(RouterLink).length, 0, 'No react-router link');
  t.equal(link.find('a').props().children, 'contents', 'Link children are contained inside link');

  t.end();
});

test('Link component for a react-router link', (t) => {
  const link = mountWithStyletron(
    <Link to="/some-relative-path">
      contents
    </Link>
  );

  t.equal(link.find(RouterLink).length, 1, 'react-router link');
  t.equal(link.find(RouterLink).props().children, 'contents',
    'Link children are contained inside link');

  t.end();
});
