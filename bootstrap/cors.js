const winston = require('winston');
const corslib = require('cors');

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS.split(';');

const config = {
  credentials: true,

  origin(reqOrigin, callback) {
    if (ALLOWED_ORIGINS.some(o => o === reqOrigin)) {
      return callback(null, true);
    }

    winston.debug(`Request origin ${reqOrigin} not allowed`);
    return callback(null, false);
  },
};

const cors = {
  initialize(app) {
    app.use(corslib(config));
  },
};

module.exports = cors;
