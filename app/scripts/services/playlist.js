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
                    var data = ($rootScope.$storage[scope.name] || {
                        songs: [],
                        tags: [],
                        duration: 0,
                        coolness: 0,
                        coolnessRate: 0

                    });

                    var getDuration = function () {
                        var total = 0;
                        for (var i = 0; i < scope.songs.length; i++) {
                            total += scope.songs[i].duration_ms;
                        };
                        return total;
                    };

                    var getCoolness = function () {
                        var total = 0;
                        for (var i = 0; i < scope.songs.length; i++) {
                            total += scope.songs[i].duration_ms * scope.songs[i].popularity;
                        }

                        return total / getDuration();
                    };

                    var formatDuration = function (ms) {
                        var duration = moment.duration(ms);
                        return duration.hours().toString().padLeft(2, '0') + ':' +
                            duration.minutes().toString().padLeft(2, '0') + ':' +
                            duration.seconds().toString().padLeft(2, '0');
                    };

                    scope.songs = data.songs;
                    scope.tags = data.tags;
                    scope.duration = data.duration;
                    scope.coolness = data.coolness;
                    scope.coolnessRate = data.coolnessRate;

                    scope.persisted = function () {
                        return null != $rootScope.$storage[scope.name]
                    };

                    scope.addSong = function (song) {
                        song.rate = song.popularity * 10 / 100;
                        scope.songs.push(song);

                        scope.coolness = getCoolness();
                        scope.duration = formatDuration(getDuration());
                        scope.coolnessRate = scope.coolness * 10 / 100;

                    };


                    scope.removeSong = function (song) {
                        var index = scope.songs.indexOf(song);

                        scope.songs.splice(index, 1);

                        scope.coolness = getCoolness();
                        scope.duration = formatDuration(getDuration());
                        scope.coolnessRate = scope.coolness * 10 / 100;

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