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
    util.debug('route POST api/v1/url hit', path, 'n');

    // Creating a new link
    link.create({ originLink: originLink, shortLinkID: linkID, userID: token }, (err) => {
      res.status(500).json((error) => {
        util.debug(`Link was not created {${error}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was created', path, 's');
    });
  });

  // Find all links
  router.get('/urls', (req, res) => {
    util.debug('route GET api/v1/urls hit', path, 'n');
    link.findAll((err) => {
      res.status(500).json((error) => {
        util.debug(`Links were not found {${error}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Links were found', path, 's');
    });
  });

  // Find one by ID
  router.get('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route GET api/v1/urls/${reqBody.id} hit`, path, 'n');
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
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route DELETE api/v1/urls/${reqBody.id} hit`, path, 'n');
    link.destroy(req.body, (error) => {
      res.status(500).json((error) => {
        util.debug(error, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was deleted', path, 's');
    });
  });

  // Update one by ID
  router.post('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route POST api/v1/urls/${reqBody.id} hit`, path, 'n');
    link.update(req.body, (error) => {
      res.status(500).json((error) => {
        util.debug(error, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Link was updated', path, 's');
    });
  });

  return router;
};
