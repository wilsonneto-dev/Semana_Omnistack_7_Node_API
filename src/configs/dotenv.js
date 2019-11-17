const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

console.log('env: ', process.env.NODE_ENV);
console.log('name: ', process.env.NAME);

const env = process.env.NODE_ENV || 'dev';

if (
  env == 'dev' &&
  fs.existsSync(path.resolve(__dirname, '..', '..', '.env'))
) {
  dotenv.config({ path: '.env' });
}

module.export = dotenv;
