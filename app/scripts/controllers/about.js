'use strict';

/**
 * @ngdoc function
 * @name europaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the europaApp
 */
angular.module('europaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
