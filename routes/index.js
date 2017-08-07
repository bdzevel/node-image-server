const serveStatic = require('serve-static');

const imageController = require('../controllers/image-controller');

module.exports = function(app) {
  app.use(serveStatic('public'));

  app.put('/api/image', imageController.upload, imageController.put);
};
