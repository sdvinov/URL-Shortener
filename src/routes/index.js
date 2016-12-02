module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Configuring to use /api prefix for api routes
  router.use('/api/v1', require('./api/api')(express));
  return router;
};
