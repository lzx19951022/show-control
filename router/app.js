const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const path = require('path');

const morgan = require('morgan');
const apiRouter = require('./api/api');


const app = new express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', apiRouter);
app.use(errorhandler());


app.listen(PORT, () => {
 console.log(`the server have listening at PORT ${PORT}`)
});

module.exports = app;