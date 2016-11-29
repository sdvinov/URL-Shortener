const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Using environmental variable PORT or 3000 if not specified
const port = env.process.PORT || 3000;

// Configuring body-parser for POST method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Using prefix /api/v1 for routes in routes file
app.use('/api/v1', require('./routes/api.js')(express));

// Listening for port
const server = app.listen(port);
module.exports = server;
