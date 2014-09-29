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
            console.log($scope.playlists.keys);
            $scope.log = function (val) {
                console.log(val.coolness);
                return "teste";
            }

  }]);