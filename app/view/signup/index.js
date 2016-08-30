'use strict';

require('./_signup.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('SignupController', ['$log', '$location', 'authService', SignupController]);

function SignupController($log, $location, authService) {
  $log.debug('init signupCtrl');

  this.signup = function() {
    $log.debug('init signupCtrl');
    authService.signup(this.user)
    .then( token => {
      $log.info('token', token);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
