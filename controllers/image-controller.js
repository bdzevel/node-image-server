const multer = require('multer');

const fileService = require('../services/file-service');

const CONSTANTS = require('../resources/constants');

const storage = multer.diskStorage({
  destination: CONSTANTS.PUBLIC,
  filename: function (req, file, cb) {
    const mimeType = file.mimetype,
    const extension = file.filename.replace(/image\//, '');
    fileService.generateUniqueFileName(CONSTANTS.PUBLIC, extension)
      .then((name) => cb(null, name));
  }
});
const upload = multer({
  storage,
});

const self = {
  upload: upload.array('images', 12),

  put(req, res) {
    const urls = req.files.map(f => `/${f.filename}`);
    res.status(200).send({ urls });
  },
};

module.exports = self;
