const express = require('express');
const winston = require('winston');

const cors = require('./cors');
const routes = require('../routes');

const app = express();
cors.initialize(app);
app.use(function(req, res, next) {
  if (process.env.API_KEY) {
    const auth = req.header('Authorization');
    if (auth !== process.env.API_KEY) {
      res.status(403).end();
      return;
    }
  }
  next();
});
routes(app);

const port = process.env.PORT || 3001;
app.listen(port);
winston.info(`Finished bootstrapping. Listening on ${port}.`);

module.exports = app;
