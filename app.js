const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  indexRouter = require('./routes/index');

var databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost/blog-schedule';


var app = express();
require('dotenv').config();

mongoose.connect(databaseUrl, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

//serve static assets if in prod
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app;
