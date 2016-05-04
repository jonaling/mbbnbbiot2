'use strict';

require('angular');
require('ionic');
var NodeCache = require( "node-cache" );

var B1ctrl = require('./controllers/B1ctrl');
var myCache = new NodeCache();
  
var app =  angular.module('starter', ['ionic','ngSanitize','ngStorage']);
 module.exports = app
.run(require('./app-main'))
.controller('B1ctrl',B1ctrl)
;
