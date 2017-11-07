/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var api = require('api').api;
var _ = require('lodash');
var logs = require('./logs');
var fs = require("fs");
var Promise = require("bluebird");

module.exports = {
  postUserLogin: function(data) {
    return api.post("v1/users/users/login", {
      json: {
        "mobile": Number(data.username),
        "password": data.password,
        "otp":  Number(data.otp),
        "deviceType": "web"
      }
    })
  },
  getDistrictsInsurance: function(token) {
    return api.get('v1/policy/policy/getDistrictForPolicy',{
      token: token
    });
  },
  getStakeholders: function() {
    return api.get('v1/users/users/stakeHolders?apiType=STAKEHOLDER');
  },
  getRoleHierarchy: function(token) {
    if(token) {
      return api.get('v1/users/users/roleHierarchy', {
        token
      });
    } else {
      return api.get('v1/users/users/roleHierarchy');
    }
  },
  getStatesAccToStakeholders: function(stakeHolder) {
    return api.get('v1/users/users/stakeHolders?apiType=CATEGORY&stakeholder=' + stakeHolder);
  },
  fetchOTP: function(json) {
    return api.post('v1/users/users/sendUserOtp', {
      json: {
        "username": json.username,
        "password": json.password,
        "otpType": json.otpType
      }
    });
  },
  getLocations: function(data) {
    return api.get('v1/locations/locations/locationHierarchy?level=' + data.level + '&parentLevel=' + data.parentLevel + '&parentLevelID=' + data.parentID+'&format=tree&from=' + data.level);
  },
  // getRoleHierarchy: function(token) {
  //   return api.get('v1/users/users/roleHierarchy', {
  //     token
  //   });
  // },
  getLevels: function() {
    return api.get('v1/locations/locations/levelHierarchy?stakeholderID=0100000101010817');
  },
  createCircle: function(data) {
    return api.post("v1/circles/circles/circle", {
      json: {
        "level":data.levelName,
        "levelIDs":data.levelIDs,
        "roleID": data.roleID,
        "userID": data.userID
      }
    })
  },
  registerUser: function(data) {
    let mapping = [];
    if(data.level == 'level2') {
      mapping.push({
        "level": data.level,
        "levelId": data.levelID,
      })
    }
    else {
      if(data.circleName && data.headquarterID) {
        mapping = data.levelID.map((item, index) => {
          return {
            "level": data.level,
            "levelId": item.value,
            "circleName": data.circleName,
            "circleHeadquarterId": data.headquarterID
          }
        })
      } else {
        mapping = data.levelID.map((item, index) => {
          return {
            "level": data.level,
            "levelId": item.value
          }
        })
      }
    }

    return api.post("v1/users/users/registration", {
      json: {
        "userDemographics": {
          "name": data.name,
          "mobile": Number(data.mobileNumber),
          "email": data.email,
          "password": "12345678",
          "aadharNumber": data.aadharID
        },
        "userRoles":{
          "roleMasterId": data.roleID
        },
        "userTableMappings": mapping
      }
    })
  },
  getAScircles: function(data) {
    return api.get("v1/circles/circles/circle?level4ID="+data.level4ID+ "&roleID="+ data.roleID + "&level=4");
  },
  getApprovalList: function(token, data) {
    console.log("------------->", data.activeKeys)
    return api.get("v1/users/users/user?childRoleID=" + data.roleID + "&active="+ data.activeKeys, {token});
  },
  approveOrRejectUser: function(token, data) {
    return api.put("v1/users/users/manageUser", {
      json: {
        "userDeactivation": {
          "childUserId": data.userID,
          "childRoleId": data.roleID,
          "updateAction": data.status
         }
      },
      token: token
    })
  },
  logOutUser: function(token) {
    return api.post("v1/user/user/logout",{
      token: token
    });
  }, 
  getProjects: function() {
    return api.get("internList");
  }
};

