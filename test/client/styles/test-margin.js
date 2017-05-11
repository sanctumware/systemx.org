import React from 'react';
import test from 'tape';

import mountWithStyletron from '../util/mount-with-styletron';
import {spacing, marginStyle, Margin, MarginInline} from '../../../src/client/styles/margin';

test('Expected spacing definitions', (t) => {
  t.ok(spacing.default, 'Default size is present');
  t.ok(spacing.tiny, 'Tiny size is present');
  t.ok(spacing.small, 'Small size is present');
  t.ok(spacing.large, 'Large size is present');
  t.ok(spacing.huge, 'Huge size is present');
  t.ok(spacing.enormous, 'Enormous size is present');

  t.end();
});

test('Margin style factory function', (t) => {
  t.deepEqual(marginStyle('default', 'top'), {
    margin: `${spacing.default} 0 0 0`
  }, 'Margin style object is correct for a single dimension');
  t.deepEqual(marginStyle('default', ['top', 'left']), {
    margin: `${spacing.default} 0 0 ${spacing.default}`
  }, 'Margin style object is correct for multiple dimensions');

  t.end();
});

test('Margin element', (t) => {
  const margin = mountWithStyletron(
    <Margin bottom />
  );

  t.equal(margin.find('div').length, 1, 'Margin contains div element');
  t.equal(margin.find('span').length, 0, 'Margin does not contain span element');

  t.end();
});

test('MarginInline element', (t) => {
  const margin = mountWithStyletron(
    <MarginInline bottom />
  );

  t.equal(margin.find('div').length, 0, 'Margin does not contain div element');
  t.equal(margin.find('span').length, 1, 'Margin contains span element');

  t.end();
});
