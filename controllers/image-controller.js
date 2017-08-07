const multer  = require('multer');
const storage = multer.diskStorage({
  destination: 'public'
});
const upload = multer({
  storage
});

const self = {
  upload: upload.array('images', 12),

  put(req, res) {

  },
};

module.exports = self;
