const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';

if (env !== 'production') dotenv.config({ path: '.env' });

module.export = dotenv;
