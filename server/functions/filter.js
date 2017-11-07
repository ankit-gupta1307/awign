/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var Promise = require('bluebird');
var api = require('api');
var _ = require('lodash');

var filters = module.exports = {

	authFilter: function(req, res, next) {
		console.log('req.isAuthenticated()',req.isAuthenticated(),'req.xhr',req.xhr)
	  if (!req.isAuthenticated()) {
	    if (req.xhr){
	      res.status(401).send({msg: 'unauthorized'});
	      res.end();
	    } else {
	      res.send({
	      	status:false,
	      	error:'unauthorized',
	      	data: {
	      		login: false
	      	}
	      })
	    }
	  } else {
	    next();
	  }
	}
};