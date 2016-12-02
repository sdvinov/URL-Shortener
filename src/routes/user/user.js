const link = require('./../../models/user');

module.exports = (express) => {

  // Enabeling router
  const router = express.Router();

  // Configuring POST route /api/v1/user
  router.post('/user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const generate = require('./../../modules/generator');
    link.create({ username: username, password: password, token: token }, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.get('/users', (req, res) => {
    link.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    link.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
    });
  });

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
