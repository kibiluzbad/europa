'use strict';

/**
 * @ngdoc function
 * @name europaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the europaApp
 */
angular.module('europaApp')
    .controller('MainCtrl', ['$scope', 'Playlist',
        function ($scope, Playlist) {
            $scope.playlists = new Playlist().query();
            $scope.hasKeys = function (obj) {
                var result = false;
                for (var k in obj) {
                    if (k[0] != '$') result = true;
                }
                return result;
            }

  }]);