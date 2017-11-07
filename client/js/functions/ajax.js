
import axios from 'axios';
import _ from 'lodash';

export default (function () {
  let ajax = function (method, url, options) {
    var options = _.isUndefined(options) ? {} : options;
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'deviceType': "web"
    };

    if (_.has(options, 'headers')) {
      Object.keys(options.headers).forEach(function (item) {
        headers[item] = options.headers[item];
      })
    }

    options.headers = headers;
    options.method = method;
    options.url = url;
    options.baseURL = window.location.origin+'/';
    
    return axios(options).then((response) => {
      if (response.status == 200) {
        console.log(response)
        return response.data      
      } else {
        if (_.has(response.data, 'error')) {
          return {
            status: false,
            error: response.data.error
          }
        } else if (response.status == 401) {
          return {
            status: false,
            error: "Unauthorized request"
          }
        } else if(response.status == 403) {
          return {
            status: false,
            error: "Access Denied"
          }
        } else {
          return {
            status: false,
            error: "Something went wrong!!"
          }
        }
      }
    }).catch((error) => {
      return {
        status: false,
        error: error
      }
    })
  };

  ['get', 'put', 'post', 'delete'].forEach(function (method) {
    ajax[method] = function (url, options) {
      return ajax(method, url, options);
    }
  });

  return ajax;
})()
