const express = require('express');
const winston = require('winston');

const routes = require('../routes');

const app = express();
routes(app);

const port = process.env.PORT || 3001;
app.listen(port);
winston.info(`Finished bootstrapping. Listening on ${port}.`);

module.exports = app;
