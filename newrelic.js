'use strict'

//log level options trace, info
const config = require('./config');

let app_name = config.constants.production ? "CIREACT" : "CIREACT_TEST";

exports.config = {
  app_name: [app_name],
  license_key: '657c8b58e4fddb670767f81643aa6a2f734220f3',
  logging: {
    level: 'trace',
    filepath: require('path').join(process.cwd(), 'logs/newrelic_agent.log')
  }
}
