const winston = require('winston');
const dotenv = require('dotenv');

const folderStructure = require('./folder-structure');

dotenv.config();
winston.level = process.env.TRACE_LEVEL || 'info';

folderStructure.initialize()
  .then(() => require('./web-server'))
  .catch(e => winston.error(' >> ERR! ', e));
