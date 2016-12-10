/* eslint-disable no-console,no-process-env,no-undef */

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import path from 'path';
import Express from 'express';
import raven from 'raven';

import config from '../../config/common';
import secrets from '../../config/secrets';

import getPublicContributions from './api/get-public-contributions';
import getPrivateContributions from './api/get-private-contributions';
import getMiscStats from './api/get-misc-stats';
import getProductivityStats from './api/get-productivity-stats';

/* Initialization */
const app = Express();
const sentryClient = new raven.Client(secrets.sentryDSN);
sentryClient.patchGlobal();

/* CSRF middleware */
const csrfProtection = csrf({cookie: true});
const parseForm = bodyParser.urlencoded({extended: false});

/* Templating engine */
app.set('view engine', 'pug');

/* Static routes */
app.use('/static', Express.static(path.resolve(__dirname, '../client/static')));
app.use('/dist', Express.static(path.resolve(__dirname, '../../dist')));

/* Express middleware */
app.use(raven.middleware.express.requestHandler(secrets.sentryDSN));
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
  return res.send(JSON.stringify({
    error: 'Unauthorized'
  }));
});

/* API endpoints */
app.post('/api/get-public-contributions', parseForm, csrfProtection, getPublicContributions);
app.post('/api/get-private-contributions', parseForm, csrfProtection, getPrivateContributions);
app.post('/api/get-misc-stats', parseForm, csrfProtection, getMiscStats);
app.post('/api/get-productivity-stats', parseForm, csrfProtection, getProductivityStats);

/* View endpoints */
app.get('/resume.pdf', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/static/pdf/kevin-lin-resume.pdf'));
});
app.get('*', csrfProtection, (req, res) => {
  res.render(path.resolve(__dirname, '../client/index'), {csrfToken: req.csrfToken()});
});

app.use(raven.middleware.express.errorHandler(secrets.sentryDSN));

const server = app.listen(process.env.PORT || config.app.port || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
