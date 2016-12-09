const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const util = require('utility-tool-sd');

// Using environmental variable PORT or 3000 if not specified
const port = process.env.PORT || 3000;

// Configuring body-parser for POST method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Using prefix /api/v1 for routes in routes file
app.use('/', require('./routes')(express));

// Listening for port
const server = app.listen(port, () => {
  util.debug('Server running on port ' + port, 'src/app.js', 'notice');
});
module.exports = server;
