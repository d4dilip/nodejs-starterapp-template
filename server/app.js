/**
 * Main application file
 */

'use strict';
var fs = require("fs"),
	http = require("http");
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
// include the package for mongodb
//var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to database
// uncomment below line to connect mongodb 
//mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;


// var express = require('express');
// var server = express();
// var path = require('path');

// // viewed at http://localhost:8080
// server.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname + '/client/index.html'));
// });

// server.listen(process.env.port || process.env.PORT || 3979, function () {
//    console.log('%s listening to %s', server.name, server.url);
// });