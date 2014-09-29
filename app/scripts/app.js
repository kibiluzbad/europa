'use strict';

/**
 * @ngdoc overview
 * @name europaApp
 * @description
 * # europaApp
 *
 * Main module of the application.
 */
angular
    .module('europaApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angularMoment',
    'ui.sortable',
    'ngStorage',
  ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/create-playlist', {
                    templateUrl: 'views/create-playlist.html',
                    controller: 'CreatePlaylistCtrl'
                })
                .when('/playlist/:name', {
                    templateUrl: 'views/create-playlist.html',
                    controller: 'EditPlaylistCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
  }]).run(['$rootScope', '$location',
            function ($rootScope, $location) {

            $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
                $rootScope.activeRoute = $location.path();
            });
    }]);
