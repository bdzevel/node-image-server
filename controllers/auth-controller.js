const self = {
  isAuthorized(req, res, next) {
    if (process.env.API_KEY) {
      const auth = req.header('Authorization');
      if (auth !== process.env.API_KEY) {
        res.status(403).end();
        return;
      }
    }
    next();
  },
};

module.exports = self;
