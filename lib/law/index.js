/**
 * Module dependencies.
 */

var express = require('express');

/**
 * Exports Application
 */

 var app = module.exports = express();

app.get('/law/:id', require('lib/layout'));
app.get('/topic/:friendlyURL', require('lib/layout'));
