'use strict';

describe('Service: config', function () {

    // load the service's module
    beforeEach(module('europaApp'));

    // instantiate service
    var config;
    beforeEach(inject(function (_config_) {
        config = _config_;
    }));

    it('should have api url', function () {
        expect(!!config.apiUrl).toBe(true);
    });

});