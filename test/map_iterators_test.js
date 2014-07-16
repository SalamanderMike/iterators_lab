// test/iterators_test.js

// want to include src/iterators.js

var Iterators = require("../src/map_iterators.js"),
		expect = require('chai').expect;


describe('Iterators', function() {
	describe('#contains', function() {
		var myPets = ['cat','dog','bird','lizard'];
		it('should return true for item in the list', function() {
			expect(Iterators.contains(myPets, 'cat')).to.equal(true);
		})
	})
	describe('#each', function() {
		var myPets = ['cat','dog','bird','lizard'];
		it('should return true for item in the list', function() {
			expect(Iterators.each(myPets, 'cat')).to.equal(true);
		})
	})
	describe('#map', function() {
		var myPets = ['cat','dog','bird','lizard'];
		it('should return true for item in the list', function() {
			expect(Iterators.map(myPets, 'cat')).to.equal(true);
		})
	})
	describe('#filter', function() {
		var myPets = ['cat','dog','bird','lizard'];
		it('should return true for item in the list', function() {
			expect(Iterators.filter(myPets, 'cat')).to.equal(true);
		})
	})

})