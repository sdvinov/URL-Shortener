module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Configuring to use /api prefix for api routes
  
  router.use('/api/v1', require('./api/api')(express));
  router.use('/api/v1', require('./user/user')(express));
  router.use('/go', require('./go/redirect')(express));
  return router;
};
