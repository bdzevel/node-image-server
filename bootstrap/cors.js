const winston = require('winston');
const corslib = require('cors');

let config;
if (process.env.ALLOWED_ORIGINS) {
  const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS.split(';');

  config = {
    credentials: true,

    origin(reqOrigin, callback) {
      if (ALLOWED_ORIGINS.some(o => o === reqOrigin)) {
        return callback(null, true);
      }

      winston.debug(`Request origin ${reqOrigin} not allowed`);
      return callback(null, false);
    },
  };
} else {
  config = { credentials: true, origin: true };
}

const cors = {
  initialize(app) {
    app.use(corslib(config));
  },
};

module.exports = cors;
