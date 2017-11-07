
const config = module.exports = {
  app: {
    port: 9000,
    publicDir: __dirname + '/../public',
    uploadsDir: __dirname + '/../storage/uploads',
    sessionDir: __dirname + '/../storage/sessions'
  },
  http: {
    defaultApi: 'http://demo6047413.mockable.io/'
  },
  constants: { 
    cookieAge: 15 * 60 * 1000, /* microseconds */
    maxConnectionSequelize: 10,
    minConnectionsSequelize: 0,
    idleTimeSequelize: 10000,
    sessionTTL: 24 * 60 * 60, /* one day in seconds */
    production: true,
    sessionAge: 15 * 1000 * 1000, /* 10 minutes in microseconds */
    lastDate: '2017-01-17 23:59:59', /* time format: yyyy-mm-dd hr:min:sec */
    lastDateNonLoanee: '2017-01-10 23:59:59', /* time format: yyyy-mm-dd hr:min:sec */
  },
  database: {
    redisHost: '127.0.0.1',
    redisPrefix: 'farmguide.sess.'
  }
};
