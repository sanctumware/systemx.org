import React from 'react';
import test from 'tape';

import ExternalLinks, {
  ExternalLink
} from '../../../../../src/client/app/components/main/external-links';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('External links are rendered', (t) => {
  const externalLinks = mountWithStyletron(
    <ExternalLinks />
  );

  t.equal(externalLinks.find(ExternalLink).length, 6, 'Correct number of external links');

  t.end();
});
