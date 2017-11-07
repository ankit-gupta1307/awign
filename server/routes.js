/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

const _ = require('lodash');
const app = module.exports = require('express')();
const flagerr = false;
const auth = require('auth');
const functions = require('./functions');
const exceptions = functions.exception;
const view = require('view');
const express = require('express');
const path = require('path');
const routeErrorMessage = 'monsoon late aayegi!';

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';

// load routes after categories have been cached
require('./initialize/index.js').load(function (err) {
  if (err) {
    flagerr = true;
  }

  auth();
  app.use(function (req, res, next) {
    res.locals._ = _;
    res.locals.view = view;

    if (_.has(req, "session")) {
      req.session.touch(function (err) {
        if (!_.isUndefined(err)) {
          console.log('error in refreshing session', err);
          console.trace();
        }
      })

      req.session.save(function (err) {
        if (!_.isNull(err)) {
          console.log('error in saving session', err);
        }
      })      
    }

    res.locals.componentId = function (type, modelId, index) {
      var randStr = function (length) {
        length = _.isUndefined(length) ? 5 : length;

        return Math.random().toString().slice(2, 2 + length);
      };
      modelId = _.isUndefined(modelId) ? '' : modelId;
      index = _.isUndefined(index) ? '' : index;

      var path = req.path.slice(1).replace(/\//g, '-').replace(/\./g, '-').replace(/#/, '-');

      return [path, type, modelId, index, randStr()].join('');
    };
    next()
  })

  /**
   * Now that all the necessary middlewares are in place,
   * mount various apps
   */
  require(__dirname + '/apps/').forEach(function (a) {
    app.use(a.prefix, a.app);
  });

  if (isDeveloping) {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: 'client',
      serverSideRender: true,
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/*', function response(req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/index.html')));
      res.end();
    });
  } else {
    app.use(express.static(__dirname + '/../dist'));
    app.get('/*', function response(req, res) {
      res.sendFile(path.join(__dirname, '/../dist/index.html'));
    });
  }

  if (!flagerr) {
    console.log('routes mounted and application loaded......');
  } else {
    app.use(function (req, res) {
      exceptions.customException(req, res, routeErrorMessage, 500);
    })
    console.log('application issue!!!');
    console.trace()
  }
});