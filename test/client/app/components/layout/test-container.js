import React from 'react';
import sinon from 'sinon';
import test from 'tape';

import browser from '../../../../../src/client/app/util/browser';
import Container, {Children, Home} from '../../../../../src/client/app/components/layout/container';
import mountWithStyletron from '../../../util/mount-with-styletron';

test('Structure and home navigation of container', (t) => {
  const browserStub = sinon.stub(browser, 'push');
  const container = mountWithStyletron(
    <Container>
      contents
    </Container>
  );

  t.equal(container.find('Window').length, 1, 'Container is wrapped by top-level window');
  t.equal(container.find(Children).length, 1, 'Container children element');
  t.equal(container.find(Children).props().children, 'contents', 'Container children are correct');
  t.notOk(browserStub.called, 'No home navigation');
  container.find(Home).simulate('click');
  t.ok(browserStub.called, 'Navigate to home after logo click');

  browser.push.restore();
  t.end();
});
