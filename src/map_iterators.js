// iterators.js is a module
// contains is a method in this module
// var pets = ['cat','dog','bird','lizard'];
// var iterators = require("./iterators.js");

// ***** filter Loop *****
var filter = function(list, item) {
	var result = false;

	list.filter(function(currentItem) {
		if ( currentItem === item ) {
				result = true;
		}
	});
	return result;
}

// ***** map Loop *****
var map = function(list, item) {
	var result = false;

	list.map(function(currentItem) {
		if ( currentItem === item ) {
				result = true;
		}
	});
	return result;
}

// ***** for Loop *****
var each = function(list, action) {
	for (var i = 0; i < list.length; i++) {
		action(list[i], i);
	};
	return list;
}


// ***** forEach Loop *****

// implement a contains function
// takes 2 params
// a list to search items
// an item to search for

var contains = function(list, item) {
	var result = false;

list.forEach(function(currentItem) {
	if ( currentItem === item ) {
			result = true;
	}
});

	// same iterator as a for loop:
	// for (var i = 0; i < list.length; i++) {
	// 	if ( list[i] === item ) {
	// 		result = true;
	// 	}
	// };

	return result;
}

// add value to module (contains is the key)
module.exports.contains = contains;
module.exports.each = each;
module.exports.map = map;




