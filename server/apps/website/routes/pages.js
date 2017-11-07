/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var app = module.exports = require('express')();
var functions = require('functions'),
  data = functions.data;
var authFilter = functions.filter.authFilter;
var path = require('path');
var fs = require('fs');
var siteData = require('./../../../models/siteData.json');

app.get('/getDistricts', function (req, res) {
  return data.getDistrictData(req.query.stateId).then(function (data) {
    res.send(data)
    res.end()
  })
});

/*app.post('/authUser', function (req, res) {
  res.send({
    status: true,
    data: {
      user: "hello",
      username: "seriously",
      password: "jkASJD(ASD)"
    }
  });
  res.end();
});*/

app.post("/agreementSign",authFilter, function (req, res) {
  return data.postAgreementSign(req.user.token).then(function (data) {
  console.log('datatatata',data)
  res.send(data);
  res.end();
  })
});
app.post("/sendUser", function (req, res) {
  console.log('----------sendUser================',req.body,'7&&&&&&&&&&&',req.user)
  if(req.body.isToken == '1') {
    if(req.user && req.user.token) token = req.user.token
    else token = undefined;
  } else {
    token = 0;
  }
  return data.createUser(req.body.data, token).then(function (data) {
    console.log('datatatata',data)
    res.send(data);
    res.end();
  }, function(err) {
    console.log('errrrr',err.body)
    res.send(err.body);
    res.end();
  })
});

app.get("/sendIfsc", function (req, res) {
  return data.getIfsc(req.query.branchReference, req.query.ifscCode, req.query.districtId).then( function(data) {
    console.log('sendIfscerrrrr',data)
    res.send(data)
    res.end();
  },function (err) {
    console.log('sendIfscdataaaa',err)
    res.send(err.body);
    res.end();
  })
});

app.get("/getInitial", function (req, res) {
  if(req.query.isToken !== '0') {
    if(req.user && req.user.token) token = req.user.token
    else token = undefined;
  } else {
    token = 0;
  }
  return data.getStakeHolder(token).then(function (data) {
    res.send(data);
    res.end();
  }).catch(function (err) {
    res.status(400).send(err.body);
    res.end()
  })
})

app.get("/getCategoryFromStake", function (req, res) {
  console.log('getCategoryFromStake',req.query.stakeHolder, req.query.isToken)
  if(req.query.isToken !== '0') {
    if(req.user && req.user.token) token = req.user.token
    else token = undefined;
  } else {
    token = 0;
  }
  return data.getCategoryFromStake(req.query.stakeHolder, token).then(function (data) {
    res.send(data);
    res.end();
  }).catch(function (err) {
    console.log('99900000000099999999999')
    res.status(400).send(err.body);
    res.end()
  })
})

app.get("/getUserCategoryFromCategory", function (req, res) {
  console.log('getUserCategoryFromCategory',req.query)
  if(req.query.isToken !== '0') {
    if(req.user && req.user.token) token = req.user.token
    else token = undefined;
  } else {
    token = 0;
  }
  return data.getUserCategoryFromCategory(req.query.stakeHolder, req.query.category, token).then(function (data) {
    res.send(data);
    res.end();
  })
})
app.get("/getState", function (req, res) {
  console.log('getState',req.query)
  return data.getStates().then(function (data) {
    res.send(data);
    res.end();
  })
})
app.get("/getUserProfile", function (req, res) {
  var data = {
    "status": true,
    "data": {
      'name': 'Tarang Agrawal',
      'aadhar':'350723768706',
      'mobile':'8269159766',
      'email':'tarang@farmguide.in'
    },
  }
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(data);
  res.end();
})

app.post("/getVerifyMobile", function (req, res) {
  console.log('getVerifyMobile',req.body,'datata-----',req.params)
  return data.getVerifyMobile(req.body.mobile).then(function (data) {
    res.send(data);
    res.end();
  })
})
app.post("/getVerifyOtp", function (req, res) {
  console.log('getVerifyOtp',req.body.mobile, req.body.otp)
  return data.getVerifyOtp(req.body.mobile, req.body.otp).then(function (data) {
    console.log('datatatata',data)
    res.send(data);
    res.end();
  })
})

app.get("/getBanks", function (req, res) {
  console.log('getBanks',req.query.bankType)
  return data.getBanks(req.query.bankType).then(function (data) {
    console.log('datatatata',data)
    res.send(data);
    res.end();
  })
})

app.get("/switchLanguage", function (req,res) {
  let language = req.query.lang;
  // not creating a stream in this case becuase streams will give chunks which might contain half the data needed and hence will give incomplete data - please cross verify and improve if necessary
  fs.readFile( __dirname + '/../../../models/siteData.json','utf-8',(err,data) => {
    if (err) throw err;
    let langData  = JSON.parse(data)[language];
    console.log(language);
    return res.send({ status:true,data:langData});
  });
})
