// iterators.js is a module
// contains is a method in this module
// var pets = ['cat','dog','bird','lizard'];
// var iterators = require("./iterators.js");



var each = function(list, action) {
	for (var i = 0; i < list.length; i++) {
		action(list[i], i);
	};
	return list;
}




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