var xtend = require('xtend');

var developmentConfig = require('./development');
var productionConfig = require('./production');

/**
 * Configuration options common to all environments.
 */
var commonConfig = {
  // Application properties
  app: {
    name: 'kevin-lin',
    title: 'kevin lin',
    port: 4000
  }
};

var config = xtend(commonConfig, process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig);

module.exports = config;
