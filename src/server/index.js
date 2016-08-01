import bodyParser from 'body-parser';
import path from 'path';
import Express from 'express';

import config from '../../config/common';

const app = Express();

const PATH_STATIC = path.resolve(__dirname, '../client/static');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/static', Express.static(PATH_STATIC));
app.use('/dist', Express.static(PATH_DIST));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* API endpoints */
// TODO

/* View endpoints */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

const server = app.listen(process.env.PORT || config.app.port || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
