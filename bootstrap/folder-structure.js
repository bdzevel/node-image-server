const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

function publicFolderExists() {
  return new Promise(function(resolve) {
    fs.access(PUBLIC, function(err) {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

function createPublicFolder() {
  return new Promise(function(resolve) {
    fs.mkdir(PUBLIC, resolve);
  });
}

module.exports = {
  initialize() {
    return publicFolderExists()
      .then(function(exists) {
        if (exists) {
          return Promise.resolve();
        }
        return createPublicFolder();
      });
  },
};
