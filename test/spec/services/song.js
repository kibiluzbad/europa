'use strict';

describe('Service: Song', function () {

  // load the service's module
  beforeEach(module('europaApp'));

  // instantiate service
  var Song;
  beforeEach(inject(function (_Song_) {
    Song = _Song_;
  }));

  it('should do something', function () {
    expect(!!Song).toBe(true);
  });

});
