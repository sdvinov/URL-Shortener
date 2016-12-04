const link = require('./../../models/link');
const util = require('./../../modules/util');
const path = 'src/routes/api/api.js';

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
      res.status(500).json((err) => {
        util.debug(`Link was not created {${err}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was created', path, 's');
    });
  });

  // Find all links
  router.get('/urls', (req, res) => {
    link.findAll((err) => {
      res.status(500).json((err) => {
        util.debug(`Links were not found {${err}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Links were found', path, 's');
    });
  });

  // Find one by ID
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug('Link by ID was not found', path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was found', path, 's');
    });
  });

  // Delete one by ID
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug(err, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug(`Link was deleted`, path, 's');
    });
  });

  // Update one by ID
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    link.update(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug(err, path, 'e')
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was updated', path, 's');
    });
  });

  return router;
};
