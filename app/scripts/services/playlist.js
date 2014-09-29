'use strict';

/**
 * @ngdoc service
 * @name europaApp.Playlist
 * @description
 * # Playlist
 * Provider in the europaApp.
 */
angular.module('europaApp')
    .provider('Playlist', function () {

        this.$get = ['$rootScope', '$localStorage',
            function ($rootScope, $localStorage) {
                $rootScope.$storage = $localStorage;

                return function (listname) {

                    var scope = this;
                    scope.name = listname || '';
                    scope.songs = ($rootScope.$storage[scope.name] || {
                        songs: []
                    }).songs;

                    scope.persisted = function () {
                        return null != $rootScope.$storage[scope.name]
                    }
                    scope.getCoolness = function () {
                        var total = 0;
                        for (var i = 0; i < scope.songs.length; i++) {
                            total += scope.songs[i].duration_ms * scope.songs[i].popularity;
                        }

                        scope.coolness = total / scope.totalDuration();
                        scope.coolnessRate = scope.coolness * 10 / 100;;

                        return scope.coolness;
                    };

                    scope.totalDuration = function () {
                        var total = 0;
                        for (var i = 0; i < scope.songs.length; i++) {
                            total += scope.songs[i].duration_ms;
                        };
                        return total;
                    };


                    scope.addSong = function (song) {
                        song.rate = song.popularity * 10 / 100;
                        scope.songs.push(song);
                    };

                    scope.removeSong = function (song) {
                        var index = scope.songs.indexOf(song);

                        scope.songs.splice(index, 1);
                        if (0 >= scope.songs.length) delete $rootScope.$storage[scope.name];
                    };

                    scope.save = function () {
                        var obj = {};
                        obj[scope.name] = scope;
                        $localStorage.$default(obj);
                    };

                    scope.query = function () {
                        return $rootScope.$storage;
                    };
                }
        }];
    });
