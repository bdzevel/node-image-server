const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

function fileExists(filePath) {
  return new Promise(function(resolve) {
    fs.access(filePath, function(err) {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

const self = {
  generateUniqueFileName(folderPath, extension) {
    const name = `${uuid.v4()}.${extension}`;
    return fileExists(path.join(folderPath, name))
      .then(function(exists) {
        if (exists) {
          return self.generateUniqueFileName(folderPath, extension);
        }
        return name;
      });
  },
};

Object.assign(module.exports, self);
