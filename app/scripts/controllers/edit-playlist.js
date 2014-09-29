'use strict';

/**
 * @ngdoc function
 * @name europaApp.controller:EditPlaylistCtrl
 * @description
 * # CreatePlaylistCtrl
 * Controller of the europaApp
 */
angular.module('europaApp')
    .controller('EditPlaylistCtrl', ['$scope', '$routeParams', 'Playlist',
        function ($scope, $routeParams, Playlist) {
            String.prototype.padLeft = function (l, c) {
                return Array(l - this.length + 1).join(c || " ") + this
            };

            $scope.playlist = new Playlist($routeParams.name);

            $scope.$on('add-song', function (event, data) {
                console.log(data);
                $scope.playlist.addSong(data);

            });

            //TODO: Create a directive to handle that
            $scope.getDuration = function (ms) {
                var duration = moment.duration(ms);
                return duration.hours().toString().padLeft(2, '0') + ':' +
                    duration.minutes().toString().padLeft(2, '0') + ':' +
                    duration.seconds().toString().padLeft(2, '0');
            };

            $scope.remove = function (song) {
                $scope.playlist.removeSong(song);
            };

            $scope.save = function () {
                $scope.playlist.save();
            }

            $scope.sortableOptions = {
                update: function (e, ui) {},
                stop: function (e, ui) {
                    console.log(e);
                    console.log(ui);
                }
            };
}]);
