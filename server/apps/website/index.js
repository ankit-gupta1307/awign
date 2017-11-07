/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var app = module.exports = require('express')();
var view = require('view').prefix('website');
var _ = require('lodash');

var partials = require('./partials');
var functions = require('functions');

var unAuthFilter = functions.filter.unAuthFilter;

var htmlResponse = functions.views.htmlResponse;

app.use(function (req, res, next) {

  res.locals.view = view;

  next();
});

app.use('/', require('./routes/pages'));
app.use('/login', require('./routes/auth'));
app.use('/project', require('./routes/common'));
