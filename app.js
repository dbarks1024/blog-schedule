var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');


var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/blog-schedule";


var app = express();
require('dotenv').config();

mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
