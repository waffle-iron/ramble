'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('ramble', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl'
  });

  //TODO: add any other dashboard routes

}]);

// angular services
require('./service/auth-service');
require('./service/ramble-service');

// angular components
require('./component/nav');

// angular controllers
require('./view/signup/signup-controller.js');
require('./view/signin/signin-controller.js');
