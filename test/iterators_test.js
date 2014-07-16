var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){ // find the function() within Iterators
  describe('test the max method', function(){ // find the function() within the method: max
    var myArr; // instantiate a test array
    beforeEach(function(){ // Set state?
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function(){ // Test #1
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){ // Test #2
      myArr = []; // reset array to different value
      expect(Iterators.max(myArr)).to.equal(-Infinity);

    })
  })
})