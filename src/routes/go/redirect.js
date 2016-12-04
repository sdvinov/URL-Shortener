const link = require('../../models/link');
const util = require('./../../modules/util');
const path = 'src/routes/go/redirect.js';
module.exports = (express) => {
  const router = express.Router();

  // Redirect to URL
  router.get('/:shortLinkID', (req, res) => {
    // Getting short URL ID
    const reqBody = req.body;
    reqBody.shortLinkID = req.params.shortLinkID;
    // Finding it in the db
    util.debug(`route GET go/${reqBody.shortLinkID} hit`, path, 'n');
    link.go(req.body, (err) => {
      res.status(500).json((err) => {
        util.debug(err, path, 'e');
      });
    }, (data) => {
      // Redirect to URL to which this ID beonged
      res.redirect(data.originLink);
      util.debug('Link was redirected', path, 'n');
    });
  });
  return router;
};
