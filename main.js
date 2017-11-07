
require('newrelic');
require('engine').setup(function (app) {
  const path = require('path');
  const express = require('express');
  const config = require('./config');
  const passport = require('passport');

  const isDeveloping = process.env.NODE_ENV !== 'production';

  // set up static file serving from node
  if (process.env.NODE_SERVE_STATIC === '1') {
    const publicDir = config.app.publicDir;
    app.use(require('serve-static')(publicDir));
  }

  app.use(require('cookie-parser')());
  // set up sessions
  const session = require('express-session');

  const options = {
    secret: (new Buffer('farmguide-api')).toString('base64'),
    saveUninitialized: true,
    resave: false,
    httpOnly: true,
    rolling: true,
    cookie: {maxAge: config.constants.cookieAge}
  };

  if (config.constants.production) {
    // Redis Setup for sessions
    // use redis in production, where the app is being run in a process cluster
    const RedisStore = require('connect-redis')(session);
    options.store = new RedisStore({
      host: config.database.redisHost,
      port: 6379,
      prefix: config.database.redisPrefix
    });
  } else {
    const FileStore = require('session-file-store')(session);
    options.store = new FileStore({path: config.app.sessionDir});
  }

  app.use(session(options));

  // passportJs support
  app.use(passport.initialize());
  app.use(passport.session());

  // handle favicon requests
  const favicon = require('serve-favicon');
  app.use(favicon(__dirname + '/public/img/favicon.ico'));

  if (config.constants.production) {
    // catch-all error handler for production
    app.use(function catchAllErrorHandler (err, req, res, next) {
      // emergency means things are going down
      console.log((new Date).toUTCString() + ' allError:', err.message);
      console.trace();
      // res.sendStatus(500).send({msg:'All Handled Error'});
    });
    process.on('uncaughtException', function (err) {
      // bugsnag.notify(err, { context: "uncaught Exception" });
      console.log((new Date).toUTCString() + ' uncaughtException:', err.message);
      console.trace();
      // res.sendStatus(500).send({msg:'uncaught Exception'});
    });

    process.on('unhandledRejection', function(err) {
      console.log((new Date).toUTCString() + ' uncaughtException:', err.message);
      console.trace();
      // res.sendStatus(500).send({msg:'rejection error'});
    });
  } else {
    console.log('app level error not handled, debug them by yourself, app will crash if your code crashes');
    console.trace();
  }

  // hook in something for livereload in dev mode
  // load up app routes
  app.use(require('routes'));
});
