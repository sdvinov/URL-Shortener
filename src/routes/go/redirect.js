// Call links.js file
const link = require('../../models/link');
module.exports = (express) => {
  // Enabeling router
  const router = express.Router();

  // Redirect to URL
  router.get('/:shortLinkID', (req, res) => {
    // Getting short URL ID
    req.body.shortLinkID = req.params.shortLinkID;
    // Finding it in the db
    link.go(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // Redirect to URL to which this ID beonged
      res.redirect(data.originLink);
    });
  });
  return router;
};
