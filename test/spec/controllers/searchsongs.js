'use strict';

describe('Controller: SearchsongsCtrl', function () {

    // load the controller's module
    beforeEach(module('europaApp'));

    var SearchsongsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SearchsongsCtrl = $controller('SearchSongsCtrl', {
            $scope: scope,
            Song: {
                query: function (q, s, e) {
                    return {
                        $promise: [{
                            name: 'Rolling in the Deep',
                            popularity: 77,
                            duration_ms: 2200000
                    }]
                    };
                }
            }
        });
    }));

    it('should search for songs', function () {
        var result = scope.search('rolling');

        expect(result.length).toBe(1);
    });
});