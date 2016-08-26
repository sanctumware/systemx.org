import extend from 'deep-extend';

import developmentConfig from './development';
import productionConfig from './production';

/**
 * Configuration options common to all environments.
 */
const commonConfig = {
  // Application properties
  app: {
    name: 'kevin-lin',
    title: 'kevin lin',
    port: 18400
  }
};

const config = extend(commonConfig, process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig);

export default config;
