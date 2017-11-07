var app = module.exports = require('express')();
var functions = require('functions'),
  data = functions.data;
var path = require('path');
var authFilter = functions.filter.authFilter;

app.get('/getProjects', function (req, res) {
  return data.getProjects().then(function (data) {
    res.send(data);
    res.end();
  }).catch(function (err) {
  	console.log(err)
    res.status(400).send(err.body);
    res.end()
  })
});

app.get('/getLevels', function (req, res) {
  return data.getLevels().then(function (data) {
    res.send(data);
    res.end();
  }).catch(function (err) {
  	console.log(err)
    res.status(400).send(err.body);
    res.end()
  })
});