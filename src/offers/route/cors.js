'use strict';

const ALLOW_CORS = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
};

module.exports = (offersRouter) => {
  offersRouter.use(ALLOW_CORS);
};
