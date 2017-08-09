const fs = require('fs');

const CONSTANTS = require('../resources/constants');

function publicFolderExists() {
  return new Promise(function(resolve) {
    fs.access(CONSTANTS.PUBLIC, function(err) {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

function createPublicFolder() {
  return new Promise(function(resolve) {
    fs.mkdir(CONSTANTS.PUBLIC, resolve);
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
