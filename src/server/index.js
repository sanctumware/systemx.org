import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import path from 'path';
import Express from 'express';

import config from '../../config/common';

/* API methods */
import getPublicContributions from './api/get-public-contributions';
import getPrivateContributions from './api/get-private-contributions';
import getMiscStats from './api/get-misc-stats';

const app = Express();

/* CSRF middleware */
const csrfProtection = csrf({cookie: true});
const parseForm = bodyParser.urlencoded({extended: false});

/* Templating engine */
app.set('view engine', 'pug');

/* Static routes */
app.use('/static', Express.static(path.resolve(__dirname, '../client/static')));
app.use('/dist', Express.static(path.resolve(__dirname, '../../dist')));

/* Express middleware */
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(csrf({cookie: true}));

/* Error handler */
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') {
    return next(err);
  }

  res.status(403);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    error: 'Unauthorized'
  }));
});

/* API endpoints */
app.post('/api/get-public-contributions', parseForm, csrfProtection, getPublicContributions);
app.post('/api/get-private-contributions', parseForm, csrfProtection, getPrivateContributions);
app.post('/api/get-misc-stats', parseForm, csrfProtection, getMiscStats);

/* View endpoints */
app.get('*', csrfProtection, (req, res) => {
  res.render(path.resolve(__dirname, '../client/index'), {csrfToken: req.csrfToken()});
});

const server = app.listen(process.env.PORT || config.app.port || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
