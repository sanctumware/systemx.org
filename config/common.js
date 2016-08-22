var extend = require('deep-extend');

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
    port: 18400
  }
};

var config = extend(commonConfig, process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig);

module.exports = config;
