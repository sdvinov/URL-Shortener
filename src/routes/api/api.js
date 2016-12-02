const link = require('./../../models/link');

module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Create
  router.post('/url', (req, res) => {
    // Getting values to pass to database
    const originLink = req.body.link;
    const token = req.body.userID;
    const generate = require('./../../modules/generator');
    const linkID = generate.randomValue(7);

    // Creating a new link
    link.create({ originLink: originLink, shortLinkID: linkID, userID: token }, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Find all links
  router.get('/urls', (req, res) => {
    link.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Find one by ID
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Delete one by ID
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Update one by ID
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
