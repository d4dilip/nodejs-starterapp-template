/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var compression = require('compression');
var morgan = require('morgan');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function(app) {
  var env = app.get('env');
  app.use(compression());
  app.use(bodyParser({limit: '100mb'}));
  app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
  app.use(bodyParser.json({limit: '100mb'}));


  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public'); // in case of production environment  UI should be in public folder
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', 'client');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};