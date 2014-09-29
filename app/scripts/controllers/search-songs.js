'use strict';

/**
 * @ngdoc function
 * @name europaApp.controller:SearchsongsCtrl
 * @description
 * # SearchsongsCtrl
 * Controller of the europaApp
 */
angular.module('europaApp')
    .controller('SearchSongsCtrl', ['$scope', 'Song',
        function ($scope, Song) {
            $scope.song = null;

            $scope.add = function () {
                $scope.$emit('add-song', $scope.song);
                $scope.song = null;
                $('#addSong').addClass('disabled');
            };

            $scope.select = function (item, model, label) {
                $('#addSong').removeClass('disabled');
            };

            $scope.search = function (val) {
                $('#addSong').addClass('disabled');
                return Song.query({
                    q: val
                }, function (data) {

                }, function (err) {
                    console.log(err);
                }).$promise;
            };
    }]);
