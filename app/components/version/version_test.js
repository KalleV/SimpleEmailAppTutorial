'use strict';

describe('emailApp.version module', function() {
  beforeEach(module('emailApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
