
var app = module.exports = require('express')();
var passport = require('passport');
var view = require('view').prefix('website');
var _ = require('lodash');

var partials = require('./../partials');
var functions = require('functions'),
  data = functions.data;

var htmlResponse = functions.views.htmlResponse;
var authFilter = functions.filter.authFilter;
//var logOutUser = data.logOutUser;
var crypto = require('crypto'),
algorithm = 'aes-256-ctr',
password = 'asasas';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var hw = encrypt("hello world")
console.log('hwqqqqq',hw)
// outputs hello world
console.log(decrypt(hw));

app.post('/fetchUser', function (req, res) {
  return data.getUserType(req.body.username).then(function (data) {
    res.send(data);
    res.end();
  })
});

app.post("/sendOTP", function (req, res) {
  return data.postSendOTP(req.body.username, req.body.password, req.body.otpType).then(function (data) {
  console.log('datatatata',data)
    res.send(data);
    res.end();
  })
});

app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    console.log('err, user, info',err, user, info)
    if (err) {
      return next(err)
    }
    if (!user.status) {
      res.send({user})
    } else {
      if (user.status) {
        user.data.password = encrypt(req.body.password)
        req.logIn(user.data, function(err) {
          if (err) {
            return next(err); 
          }
          return res.send({
            status: true,
            error: "",
            data:user.data
          });
        });
      }
    }
  })(req, res, next)
})

app.post('/isLogin', authFilter, function(req, res) {
  console.log('qqqqwwweeerrr------------',req.user.roles)
  if(req.user && req.user.userData) {
    res.send({
      status:true,
      error:'',
      data: {
        login: {
          login: true,
          userData: req.user.userData,
          role:req.user.roles
        }
      }
    })
  } else {
    res.send({
      status:false,
      error:"Unauthorized Request",
      data: {}
    })
  }
})

app.post('/logout', function (req, res) {
  if (!_.isUndefined(req.user.token)) {
    data.logOutUser(req.user.token).then(function (result) {
      console.log('result&&&&&&&&&&',result,req.user)
      req.logout();
      res.send({msg: 'success'});
    })
  } else {
    res.send({msg: 'failure'});
  }
});

app.post('/postVerifyPassword', function(req, res){
  console.log('logout',req.body,req.user)
  if(req.body.password == decrypt(req.user.password)){
    res.send({
      status:true,
      error:'',
      data: {
        'verify': true
      }
    });
  } else {
    res.send({
      status: false,
      error:'Please enter correct password'
    }) 
  }
})

