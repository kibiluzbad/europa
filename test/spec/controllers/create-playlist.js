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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
