const express = require('express');
const winston = require('winston');

const cors = require('./cors');
const routes = require('../routes');

const app = express();
cors.initialize(app);
routes(app);

const port = process.env.PORT || 3001;
app.listen(port);
winston.info(`Finished bootstrapping. Listening on ${port}.`);

module.exports = app;
