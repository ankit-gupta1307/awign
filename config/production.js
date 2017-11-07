
const config = module.exports = {
  app: {
    port: 9000,
    publicDir: __dirname + '/../public',
    uploadsDir: __dirname + '/../storage/uploads',
    sessionDir: __dirname + '/../storage/sessions'
  },
  http: {
    defaultApi: 'http://dev1.be.farmguide.in/'
  },
  constants: {
    cookieAge: 15 * 60 * 1000, /* microseconds */
    maxConnectionSequelize: 10,
    minConnectionsSequelize: 0,
    idleTimeSequelize: 10000,
    sessionTTL: 24 * 60 * 60, /* seconds */
    production: true,
    sessionAge: 15 * 1000, /* microseconds */
    lastDate: '2017-01-17 23:59:59', /* time format: yyyy-mm-dd hr:min:sec */
    lastDateNonLoanee: '2017-01-10 23:59:59', /* time format: yyyy-mm-dd hr:min:sec */
    LIMIT: {
      LEVEL3: 15,
      LEVEL4: 10,
      LEVEL5: 10,
      LEVEL6: 10,
      LEVEL7: 20
    }
  },

  database: {
    redisHost: '127.0.0.1',
    redisPrefix: 'farmguide.sess.'
  }
};
