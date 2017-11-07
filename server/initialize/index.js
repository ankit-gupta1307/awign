/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var loaded = false;
var list = [];
var listAll = [];

var load = function (callback) {
  if (loaded) {
    callback(null, list);
  } else {
    callback(null, []);
  }
};

module.exports = {
  load: load,
  list: function () {
    return list;
  },
  listAll: function () {
    return listAll;
  }
};
