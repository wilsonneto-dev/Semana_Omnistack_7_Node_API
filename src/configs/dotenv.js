const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.resolve(__dirname, '..', '..', '.env'))) {
  dotenv.config({ path: '.env' });
}

module.export = dotenv;
