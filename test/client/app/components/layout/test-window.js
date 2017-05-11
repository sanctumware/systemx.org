import React from 'react';
import test from 'tape';

import {Margin} from '../../../../../src/client/styles/margin';
import mountWithStyletron from '../../../util/mount-with-styletron';
import {spacing} from '../../../../../src/client/styles/margin';
import {Window} from '../../../../../src/client/app/components/layout/window';

test('Window rendering', (t) => {
  const window = mountWithStyletron(
    <Window win={{}}>
      contents
    </Window>
  );

  t.equal(window.find(Margin).length, 2, 'Margin for vertical and horizontal components');

  t.end();
});

test('Horizontal dimension is responsive to different document widths', (t) => {
  const defaultWindow = mountWithStyletron(
    <Window win={{width: 100}} />
  );
  t.equal(defaultWindow.find(Margin).at(1).props().size, spacing.default,
    'Spacing is correct for default window width');

  const hugeWindow = mountWithStyletron(
    <Window win={{width: 500}} />
  );
  t.equal(hugeWindow.find(Margin).at(1).props().size, spacing.huge,
    'Spacing is correct for huge window width');

  const enormousWindow = mountWithStyletron(
    <Window win={{width: 1000}} />
  );
  t.equal(enormousWindow.find(Margin).at(1).props().size, spacing.enormous,
    'Spacing is correct for enormous window width');

  t.end();
});

test('Vertical dimension is responsive to different document widths', (t) => {
  const defaultWindow = mountWithStyletron(
    <Window win={{width: 100}} />
  );
  t.equal(defaultWindow.find(Margin).first().props().size, spacing.default,
    'Spacing is correct for default window width');

  const largeWindow = mountWithStyletron(
    <Window win={{width: 500}} />
  );
  t.equal(largeWindow.find(Margin).first().props().size, spacing.large,
    'Spacing is correct for large window width');

  const hugeWindow = mountWithStyletron(
    <Window win={{width: 1000}} />
  );
  t.equal(hugeWindow.find(Margin).first().props().size, spacing.huge,
    'Spacing is correct for huge window width');

  t.end();
});
