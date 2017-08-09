const winston = require('winston');
const serveStatic = require('serve-static');

const imageController = require('../controllers/image-controller');

module.exports = function(app) {
  app.use(serveStatic('public'));

  app.put('/api/images', imageController.upload, imageController.put);

  app.use(function(req, res) {
    res.status(404).end();
  });

  app.use(function(err, req, res, next) {
    winston.error('Uncaught error: ', err.stack);
    res.status(500).end();
  });
};
