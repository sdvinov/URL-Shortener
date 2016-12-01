module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Configuring POST route /api/v1/url
  router.post('/url', (req, res) => {

    // Getting origin link
    const originLink = req.body.link;
    const generate = require('./../modules/generator');
    const shortLink = generate.shortLink(originLink);

    // Output result
    res.json(shortLink);
  });
  return router;
};
