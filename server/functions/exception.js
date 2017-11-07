/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/
'use strict'

var customException = {
  customException: function (req, res, message, statusCode) {
    var errJSON = {
      status: 'error',
      data: [],
      message: message
    }
    res.status(statusCode).send(errJSON)
  },
  unhandledException: function (req, res, err) {
    var errJSON = {
      status: 'error',
      data: [],
      message: err
    };
    var status = err.statusCode == 'undefined' ? 400 : err.statusCode;
    res.status(status).send()
  }
};

module.exports = customException;
