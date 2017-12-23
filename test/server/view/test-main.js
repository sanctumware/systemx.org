import fs from 'fs';
import sinon from 'sinon';
import test from 'tape';

import handler from '../../../src/server/view/main';

test('Handler serves client template', (t) => {
  const mockReq = {
    headers: {
      'x-forwarded-for': '127.0.0.1'
    }
  };
  const mockRes = {
    setHeader: sinon.spy(),
    send: sinon.spy()
  };

  const mockReadFileSync = sinon.stub(fs, 'readFileSync', () => 'html');

  handler(mockReq, mockRes);

  const html = mockRes.send.getCalls()[0].args[0].toString();

  t.ok(mockReadFileSync.called, 'File is read');
  t.ok(html.startsWith('html'), 'HTML file contents are sent in response');

  fs.readFileSync.restore();
  t.end();
});
