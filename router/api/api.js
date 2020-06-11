const express = require('express');
const apiRouter = express.Router();
const cgRouter = require('./cg.js');
const atemRouter = require('./atem.js')

apiRouter.use('/cg', cgRouter);
apiRouter.use('/atem',atemRouter);

module.exports = apiRouter;