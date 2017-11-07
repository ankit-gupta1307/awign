/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var modelBuilder = require('./modelBuilder');

var stakeHolders = modelBuilder(
  'stakeHolders',
  ['data','status','type','error']
);
var getCategory = modelBuilder(
  'getCategory',
  ['id','name']
);
var getIfsc = modelBuilder(
  'getIfsc',
  ['branchID','branchName','bankID','micrCode','branchReference','address']
);
var getDistrict = modelBuilder(
  'getDistrict',
  ['districtID','districtName','districtCode','stateID','stateName']
);
var sendMobileVerificationOtp = modelBuilder(
  'sendMobileVerificationOtp',
  ['smsMasterId','otp','smsText','messageType','timestamp','messageStatus','applicationName','serviceType','status','mobile','createdAt','updatedAt','updatedBy','createdBy']
);
module.exports = {
  stakeHolders: stakeHolders,
  getCategory: getCategory,
  getDistrict:getDistrict,
  sendMobileVerificationOtp:sendMobileVerificationOtp,
  getIfsc:getIfsc
};
