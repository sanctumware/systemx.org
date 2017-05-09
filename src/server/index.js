/* eslint-disable no-console, no-process-env, no-undef */

import Express from 'express';

import view from './view';

const app = Express();
app.get('*', view.main);

const server = app.listen(process.env.PORT || 18400, () => {
  const port = server.address().port;
  console.log('Server is listening at %s', port);
});
