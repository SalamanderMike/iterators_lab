// min_test.js
// Mocha Testing Environment
// Michael McClure
// Should return the minimum of and array
// Should return undefined for an empty array

var expect = require('chai').expect,
		Min = require('../src/min.js');

describe('Min function', function(){
	describe('distance', function(){
		var places;
		beforeEach(function(){
			places = [4.73, 2.78, 6.0, 0.23, 0.02];
		});

		it('Should return the minimum of and array', function(){
			expect(Min.distance(places)).to.equal(0.02);
		})
		it('Should return undefined for an empty array', function(){
			places = [];
			expect(Min.distance(places)).to.equal(undefined);
		})
	})
})









 