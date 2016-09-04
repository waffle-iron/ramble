'use strict';

// Environment vars
const port = process.env.PORT || 8080;

// npm packages
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build`));

let server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App open on port: ${port}`);
});

server.isRunning = true;

module.exports = server;
