const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  indexRouter = require('./routes/index'),
  categoryRouter = require('./routes/category');


var databaseUrl = process.env.DATABASEURL || 'mongodb://localhost/blog-schedule';


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
app.use('/api/category', categoryRouter);

module.exports = app;
