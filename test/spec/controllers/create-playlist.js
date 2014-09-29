'use strict';

describe('Controller: CreatePlaylistCtrl', function () {

    // load the controller's module
    beforeEach(module('europaApp'));

    var CreatePlaylistCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        CreatePlaylistCtrl = $controller('CreatePlaylistCtrl', {
            $scope: scope
        });
    }));

    it('should create a playlist named Unknow1', function () {

        expect(scope.playlist.name).toBe('Unknown1');
    });
});