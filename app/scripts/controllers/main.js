'use strict';

/**
 * @ngdoc function
 * @name europaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the europaApp
 */
angular.module('europaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
