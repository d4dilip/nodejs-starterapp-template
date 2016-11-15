'use strict';
var utils = require('./greet.utils');
var Greet = require('./greet.model');

// Get  Greets
exports.index = function (req, res) {
    //dummy implementation
    var greets = [];
    greets.push("Hi");
    greets.push("Hello");
    return res.json(200, greets);
};

// Updates an existing greets
exports.update = function (req, res) {
    return res.json(200, "I have updated the greets");

};


// Search greets
exports.search = function (req, res) {
    //dummy implementation
    var greets = [];
    greets.push("Hi");
    greets.push("Hello");
    return res.json(200, greets);
};

// Get a single greet
exports.show = function (req, res) {
    //dummy implementation
    var greets = [];
    greets.push("Hi");
    greets.push("Hello");
    return res.json(200, greets[0]);
};

// Creates a new account in the DB.
exports.create = function (req, res) {
    return res.json(200, "I have created a new greet");
};

// Deletes a greet
exports.destroy = function (req, res) {
    return res.json(200, "I have deleted a  greet");
};

function handleError(res, err) {
    return res.send(500, err);
}