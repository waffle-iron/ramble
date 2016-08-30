'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
// const ngRoute = require('angular-route');

// angular modules
angular.module('ramble', []);

// angular services

// angular controllers
