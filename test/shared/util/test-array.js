import test from 'tape';

import ArrayUtil from '../../../src/shared/util/array';

test('Generate array', (t) => {
  t.deepEqual(ArrayUtil.generateArray(3, () => null), [null, null, null], 'Basic array generation');
  t.deepEqual(ArrayUtil.generateArray(3, (idx) => idx), [0, 1, 2], 'Index-aware array generation');
  t.deepEqual(ArrayUtil.generateArray(0, (idx) => idx), [], 'Zero-length array');

  t.end();
});
