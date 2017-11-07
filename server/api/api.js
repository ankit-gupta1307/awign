/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var request = require('request');
var config = require('config');
var Promise = require('bluebird');
var _ = require('lodash');
var log = require('metalogger')();

var redis = Promise.promisifyAll(require('redis'));
var apiFactory = module.exports = function () {
  // wrap up request in a bluebird promise with some default
  // options to create the base api function

  // hold accessToken if user Logged In
  var accessToken = null;

  var api = function (method, url, options) {
    // instantiate options as an empty object literal

    console.log('optionsssssssssss',options)
    var header = _.has(options, 'header') ? options.header: {};
    options = _.isUndefined(options) ? {} : options;
    var token = options.token;
    header = url.indexOf('http') === 0 ? {} : _.assign(header, {
      deviceType: 'web',
      token: token
    });

    var httpAppBase = config.http.defaultApi;
    _.merge(
      options,
      {
        timeout: 25000,
        // set the http request method
        method: method,
        // if the url starts with 'http', leave it be, otherwise
        // prefix api_base to the url
        uri: httpAppBase + url,
        // if the url starts with http, leave headers be
        // other wise attach X-DeviceID: web header
        headers: header,
        json: options.json ? options.json : true
      }
    );
    // send json data under the key 'json' as object literal

    // send query parameters under the key 'qs' as object literal

    // send application/x-www-form-urlencoded data under the key 'form' as object literal
    // send multipart/form-data under the key 'formData' as a formData object

    console.log("--------------------", options);
    return new Promise(function (resolve, reject) {
      request(options, function (err, res, body) {
        if (err) {
          console.log(err, 'err promise');
          reject(err);

          return;
        } else {
          // donot remove this is for logging
          // console.log(res.statusCode, url, res.body.count, options );

          if (res.statusCode === 200 || res.statusCode === 302 || res.statusCode == 201) {
            if (res.body.redirect === true) {
              resolve(res.body);

              return;
            }

            for (var i = 0; i < api.translators.length; i++) {
              var translator = api.translators[i];
              var data = "";

              if (translator.test(method, url, options)) {
                data = translator.translate(res.body);
                resolve(data);

                return;
              }
            }
            resolve(res.body);
          } else {
            log.info('Api error: \n' + JSON.stringify({
                url: url, body: res.body, options: options
              }, null, 2));
            // donot remove this is for logging
            console.log(res.body, res.statusCode, url, 'err');
            reject(res);

            return;
          }
        }
      });
    })
  };

  // response translators
  api.translators = [];

  // method to set accessToken for loggedIn user
  api.setToken = function (token) {
    accessToken = token;
  };

  // method to add a translator
  api.translator = function (translator) {
    if (_.isUndefined(translator.test)) {
      translator.test = function (method, url, options) {
        // console.log(url, this.pattern, this.pattern.test(url));
        return method === this.method && this.pattern.test(url);
      };
    }

    api.translators.push(translator);

    return this;
  };

  // attach shorthands for get, put, post, delete to api
  [
    'GET',
    'PUT',
    'POST',
    'DELETE'
  ].forEach(function (m) {
    api[m.toLowerCase()] = function (url, options) {
      return api(m, url, options);
    }
  });

  return api;
};
