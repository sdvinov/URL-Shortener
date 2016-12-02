const link = require('./../../models/link');

module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Configuring POST route /api/v1/url
  router.post('/url', (req, res) => {

    const originLink = req.body.link;
    const generate = require('./../../modules/generator');
    const linkID = generate.shortLink(7);
    link.create({ originLink: originLink, shortLinkID: linkID }, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.get('/urls', (req, res) => {
    link.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  return router;
};
