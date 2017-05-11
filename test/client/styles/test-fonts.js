import test from 'tape';

import {sizes, primaryFontStyle, secondaryFontStyle} from '../../../src/client/styles/fonts';

test('Expected size definitions', (t) => {
  t.ok(sizes.alpha, 'Alpha size is present');
  t.ok(sizes.beta, 'Beta size is present');
  t.ok(sizes.delta, 'Delta size is present');
  t.ok(sizes.epsilon, 'Epsilon size is present');
  t.ok(sizes.gamma, 'Gamma size is present');
  t.ok(sizes.iota, 'Iota size is present');
  t.ok(sizes.kilo, 'Kilo size is present');
  t.ok(sizes.lambda, 'Lambda size is present');

  t.end();
});

test('Primary font style factory function', (t) => {
  t.deepEqual(primaryFontStyle('beta', '#ccc', 'bold'), {
    fontFamily: 'montserrat--regular',
    fontSize: sizes.beta,
    color: '#ccc'
  }, 'Primary font style object is correct');

  t.end();
});

test('Secondary font style factory function', (t) => {
  t.deepEqual(secondaryFontStyle('beta', '#ccc', 'bold'), {
    fontFamily: 'inconsolata--bold',
    fontSize: sizes.beta,
    color: '#ccc'
  }, 'Secondary font style object is correct');

  t.end();
});
