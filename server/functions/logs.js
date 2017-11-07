/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

var exec = require('child_process').exec;
var Promise = require("bluebird");
var fs = require("fs");
var readline = require('readline');
var Stream = require('stream');
var _ = require('lodash');

module.exports = {
  filterLogs: function (args) {
    if (!_.has(args, "path")) {
      throw new Error({
        message: "path parameter missing in case"
      })
    }

    if (!_.has(args, "pathPrefix")) {
      throw new Error({
        message: "pathPrefix parameter missing in case"
      })
    }

    if (!_.has(args, "logPrefix")) {
      throw new Error({
        message: "logPrefix parameter missing in case"
      })
    }
    var requestPath = args.path;
    var pathPrefix = args.pathPrefix;
    var logPrefix = args.logPrefix;
    var random = Math.round(Math.random() * 1000);
    date = requestPath;

    if (!(_.has(args, "outLog") && !args.outLog)) {
      requestPath = requestPath.includes("out") ? "*" + requestPath + "*" :  "*out*" + requestPath + "*" ;
    } else {
      requestPath = "*" + requestPath + "*";
    }

    return new Promise(function (resolve, reject) {
      exec("ls " + __dirname + "/../../logs/temp-" + date + ".txt", function (error, stdout, stderr) {
        if (stdout.includes(date)) {
          var path =  __dirname + "/../../logs/temp-" + date + ".txt";
          resolve(path);

          return;
        } else {
          exec("tail -n +1 " + pathPrefix + "/" + requestPath + " | grep " + logPrefix + " > " + __dirname + "/../../logs/temp-" + date + ".txt", function (error, stdout, stderr) {
            if (stderr) {
              reject(new Error({
                message: "Path parameter missing in case"
              }))
              return;
            }
            var path =  __dirname + "/../../logs/temp-" + date + ".txt";
            resolve(path);

            return;
          })
        }
      })
    })
  },
  readLogFile: function (args) {
    if (!_.has(args, "path")) {
      throw new Error({
        message: "path parameter missing in case"
      })
    }
    var path = args.path;
    console.log(path, "---------------------");

    return new Promise(function (resolve, reject) {
      try {
        var inStream = fs.createReadStream(path);
        var outStream = new Stream;

        var rl = readline.createInterface({
          input: inStream,
          output: outStream
        });

        var count = 0;
        var totalTime = 0;

        rl.on('line', function (line) {
          line = line.toString();
          line = line.split(" ");
          line = line[line.length - 1]
          totalTime += Number(line);
          count++;
        })

        rl.on('close', function () {
          var hello = {
            hits: count,
            averageTime: totalTime / count
          };

          resolve(hello);

          return;
        })
      } catch (ex) {
        reject(ex);

        return;
      }
    })
  }
}
