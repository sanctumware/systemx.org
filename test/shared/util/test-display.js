import test from 'tape';

import DisplayUtil from '../../../src/shared/util/display';

test('Display if', (t) => {
  t.equal(DisplayUtil.displayIf(true, () => 'text'), 'text', 'Criteria match without else function');
  t.equal(DisplayUtil.displayIf(true, () => 'text', () => 'irrelevant'), 'text', 'Criteria match with else function');
  t.equal(DisplayUtil.displayIf(false, () => 'text'), undefined, 'Criteria mismatch without else function');
  t.equal(DisplayUtil.displayIf(false, () => 'text', () => 'display'), 'display',
    'Criteria mismatch with else function');

  t.end();
});

test('Is defined', (t) => {
  t.equal(DisplayUtil.isDefined(), false, 'Undefined input is not defined');
  t.equal(DisplayUtil.isDefined(undefined), false, 'Undefined input, explicitly passed is not defined');
  t.equal(DisplayUtil.isDefined(null), false, 'Null input is not defined');
  t.equal(DisplayUtil.isDefined(''), false, 'Zero-length string is not defined');
  t.equal(DisplayUtil.isDefined('string'), true, 'Nonzero length string is defined');
  t.equal(DisplayUtil.isDefined([]), true, 'Empty array is defined');
  t.equal(DisplayUtil.isDefined(['element']), true, 'Non-empty array is defined');

  t.end();
});
