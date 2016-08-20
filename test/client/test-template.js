import fs from 'fs';
import test from 'tape';

test('Index template references CSS and JS files', (t) => {
  const template = fs.readFileSync('src/client/index.pug', 'utf8');

  t.ok(template.indexOf('/dist/main.css') !== -1, 'Template references /dist/main.css');
  t.ok(template.indexOf('/dist/bundle.js') !== -1, 'Template references /dist/bundle.js');

  t.end();
});
