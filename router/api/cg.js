const express = require('express');
const cgRouter = express.Router();
const {CasparCG} = require("casparcg-connection");
const connection = new CasparCG();

cgRouter.get('/connect', (req, res, next) => {

  connection.host = 'localhost';
  connection.port = 5250;
  connection.connect();
  connection.play(1, 1, "TIME");
  res.status(200).send(connection.connected);
})

module.exports = cgRouter;