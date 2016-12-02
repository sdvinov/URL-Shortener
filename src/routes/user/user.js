const link = require('./../../models/user');

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
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Find all
  router.get('/users', (req, res) => {
    link.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Find one by ID
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Delete one by ID
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  // Update one by ID
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  return router;
};
