import test from 'tape';

import {
  COMPACT_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY
} from '../../../src/shared/util/media-query';

test('Exported media query constants', (t) => {
  t.ok(COMPACT_MEDIA_QUERY, 'Compact media query');
  t.ok(DESKTOP_MEDIA_QUERY, 'Desktop media query');

  t.end();
});
