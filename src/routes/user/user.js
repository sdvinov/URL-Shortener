const link = require('./../../models/user');
const util = require('./../../modules/util');
const path = 'src/routes/api/api.js';

module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Create
  router.post('/user', (req, res) => {
    // Getting data to pass to the database
    const username = req.body.username;
    const password = req.body.password;
    const generate = require('./../../modules/generator');
    const token = generate.randomValue(15);
    // Creating the user
    link.create({ username: username, password: password, token: token }, (err) => {
      res.status(500).json((err) => {
        util.debug(`User was not created {${err}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('User was created', path, 's');
    });
  });

  // Find all
  router.get('/users', (req, res) => {
    link.findAll((err) => {
      res.status(500).json((err) => {
        util.debug(`Users were not found {${err}}`, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('Links were found', path, 's');
    });
  });

  // Find one by ID
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug('User by ID was not found', path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug('User was found', path, 's');
    });
  });

  // Delete one by ID
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug(err, path, 'e');
      });
    }, (data) => {
      res.json(data);
      util.debug(`User was deleted`, path, 's');
    });
  });

  // Update one by ID
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.update(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug(err, path, 'e')
      });
    }, (data) => {
      res.json(data);
      util.debug('User was updated', path, 's');
    });
  });

  return router;
};
