'use strict';

describe('Controller: SearchsongsCtrl', function () {

  // load the controller's module
  beforeEach(module('europaApp'));

  var SearchsongsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchsongsCtrl = $controller('SearchsongsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
