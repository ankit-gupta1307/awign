/*
	Author: Deepak Sharma
	github: https://github.com/deepaksharma2491
*/
'use strict'

var _ = require('lodash');
var models = require('./models');


var stakeHoldersBuilder = function(data) {
  return models.stakeHolders({
    data : data.data,
    type :data.type,
    error: data.error,
    status:data.status
  })
};

var getCategoryBuilder = function(data) {
  return models.getCategory({
    id: data.id,
    name: data.name
  })
};

var getIfscBuilder = function(data) {
  return models.getIfsc({
  branchID:data.branchID,
  branchName:data.branchName,
  bankID: data.bankID,
  micrCode: data.micrCode,
  branchReference: data.branchReference,
  address:data.address
  })
};

var getDistrictBuilder = function(data) {
  return models.getDistrict({
    districtID: data.districtID,
    districtName: data.districtName,
    districtCode:data.districtCode,
    stateID:data.stateID,
    stateName:data.stateName
  })
};

var sendMobileVerificationOtpBuilder = function(data) {
  return models.sendMobileVerificationOtp({
    smsMasterId:data.sms_master_id,
    otp:data.otp,
    smsText:data.sms_text,
    timestamp:data.timestamp,
    messageType:data.message_type,
    messageStatus:data.message_status,
    applicationName:data.application_name,
    serviceType:data.service_type,
    status:data.status,
    mobile:data.mobile,
    createdAt:data.created_at,
    updatedAt:data.updated_at,
    updatedBy:data.updated_by,
    createdBy:data.created_by
  })
};

module.exports = [

{
  method: 'GET',
  pattern: /^(v1\/user\/user\/stakeHolders)+/i,
  translate: function (data) {
    if (data.data.length > 0) {
      data:stakeHoldersBuilder(data),
      data.type = 'stakeHolders'
    }
    return data
  }
},
{
  method: 'GET',
  pattern: /^(v1\/user\/user\/getCategory\?stakeholder=)+/i,
  translate: function (data) {
    var response = {}
    if (data.data.length > 0) {
      var result = data.data.map(function (item) {
        return getCategoryBuilder(item)
      });
    }
    response.data = result
    response.status = data.status
    response.error = data.error
    response.type = 'getCategory'
    return response
  }
},
{
  method: 'GET',
  pattern: /^(v1\/locations\/locations\/districts\?stateId=)+/i,
  translate: function (data) {
    var response = {}
    if (data.data.length > 0) {
      var result = data.data.map(function (item) {
        return getDistrictBuilder(item)
      });
    }
    response.data = result
    response.status = data.status
    response.error = data.error
    response.type = 'getDistrict'
    return response
  }
},
{
  method: 'GET',
  pattern: /^(v1\/banks\/banks\/branches\?branchReference=)+/i,
  translate: function (data) {
     var response = {}
     var res = {}
     res.bankName = data.data.bankName,
     res.bankType = data.data.bankType
    if (data.data.branches && data.data.branches.length > 0) {
      var result = data.data.branches.map(function (item) {
        return getIfscBuilder(item)
      });
      res.branchName = data.data.branches[0].branchName
      res.address = data.data.branches[0].address
      res.branchID = data.data.branches[0].branchID
    }

    if (data.data.pacs && data.data.pacs.length > 0 && data.data.bankType == "COOPERATIVE") {
      var result = data.data.pacs.map(function (item) {
        return getIfscBuilder(item)
      });
    }
    if (data.data.bankType == "COOPERATIVE") {
      res.pacs = result
      response.data = res
    }
    res.branches = result
    response.data = res
    response.status = data.status
    response.error = data.error
    response.type = 'getIfsc'
    return response
  }
},
{
  method: 'POST',
  pattern: /^(v1\/user\/user\/sendMobileVerificationOtp)+/i,
  translate: function (response) {
    var data = {}
    var newData = response.data
    if (newData) {
      data.data = sendMobileVerificationOtpBuilder(newData),
      data.type = 'sendMobileVerificationOtp',
      data.status = response.status,
      data.error = response.error
    }
    return data
  }
},
]
