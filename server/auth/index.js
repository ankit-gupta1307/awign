/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/
'use strict'

var _ = require('lodash');
var Promise = require('bluebird');
var passport = require('passport');
var config = require(__dirname + '/../../config')
var LocalStrategy = require('passport-local').Strategy;
var api = require('api');

var functions = require('functions'),
  data = functions.data;
var postUserLogin = data.postUserLogin;

module.exports = function () {
 
  // serialize and deserialize
  passport.serializeUser(function (user, done) {
    if (user && _.has(user, 'userData') && !_.isUndefined(user.userData.userID) && user.token) {
      done(null, user);
    } else {
      done('invalid user', null);
    }
 });
  
  passport.deserializeUser(function (user, done) {
     done(null, user);
  });

 // Custom Stratergy to handle auth for  
  passport.use('local', new LocalStrategy({
    usernameField: 'mobile',
    passwordField: 'password',
    otpField: 'otp',
    passReqToCallback: true
  },
  function (req, username, password, done) {
    postUserLogin({
      otp: req.body.otp,
      password: password,
      username: username
    }).then(function (res) {
      console.log('ressssssssss',res)
      done(null, res)
    })
  }));
};
