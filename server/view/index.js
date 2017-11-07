/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var viewFactory = function (prefix) {
  var view = function (path) {
    if (path.indexOf('/') === 0) {
      return __dirname + path;
    } else {
      return prefix ? [__dirname, prefix, path].join('/') : [__dirname, path].join('/');
    }
  };

  view.prefix = viewFactory;

  return view;
};

module.exports = viewFactory();
