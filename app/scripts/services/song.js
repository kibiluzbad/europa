'use strict';

/**
 * @ngdoc service
 * @name europaApp.Song
 * @description
 * # Song
 * Provider in the europaApp.
 */
angular.module('europaApp')
    .provider('Song', function () {
        this.$get = ['$resource', 'config',
                function ($resource, config) {
                var Song = $resource(config.apiUrl, {
                    type: 'track'
                }, {
                    'query': {
                        method: 'GET',
                        transformResponse: function (data) {
                            return angular.fromJson(data).tracks.items;
                        },
                        isArray: true
                    }
                });
                return Song;
            }];
    });
