/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var api = require('./api')();
var translators = require('./translator');

translators.forEach(function (t) {
  api.translator(t);
});

module.exports = {
  api: api
};
