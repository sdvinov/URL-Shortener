const link = require('./../../models/user');
const util = require('utility-tool-sd');
const path = 'src/routes/api/api.js';

module.exports = (express) => {
  // Enabeling router
  const router = express.Router();

  // Create
  router.post('/user', (req, res) => {
    // Getting data to pass to the database
    const postedUsername = req.body.username;
    const postedPassword = req.body.password;
    const generate = require('./../../modules/generator');
    const generatedToken = generate.randomValue(15);
    util.debug('route POST api/v1/user hit', path, 'n');
    // Creating the user
    link.create({
      username: postedUsername,
      password: postedPassword,
      token: generatedToken,
    }, (err) => {
      res.status(500).json(err);
      util.debug(`User was not created {${err}}`, path, 'e');
    }, (data) => {
      res.json(data);
      util.debug('User was created', path, 's');
    });
  });

  // Find all
  router.get('/users', (req, res) => {
    util.debug('route GET api/v1/users hit', path, 'n');
    link.findAll((err) => {
      res.status(500).json(err);
      util.debug(`Users were not found {${err}}`, path, 'e');
    }, (data) => {
      res.json(data);
      util.debug('Links were found', path, 's');
    });
  });

  // Find one by ID
  router.get('/users/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route GET api/v1/users/${reqBody.id} hit`, path, 'n');
    link.find(req.body, (err) => {
      res.status(500).json(err);
      util.debug('User by ID was not found', path, 'e');
    }, (data) => {
      res.json(data);
      util.debug('User was found', path, 's');
    });
  });

  // Delete one by ID
  router.delete('/users/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route DELETE api/v1/users/${reqBody.id} hit`, path, 'n');
    link.destroy(req.body, (err) => {
      res.status(500).json(err);
      util.debug(err, path, 'e');
    }, (data) => {
      res.json(data);
      util.debug('User was deleted', path, 's');
    });
  });

  // Update one by ID
  router.post('/users/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    util.debug(`route POST api/v1/users/${reqBody.id} hit`, path, 'n');
    link.update(req.body, (err) => {
      res.status(500).json(err);
      util.debug(err, path, 'e');
    }, (data) => {
      res.json(data);
      util.debug('User was updated', path, 's');
    });
  });

  return router;
};
