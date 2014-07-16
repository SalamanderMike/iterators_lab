array = [4.73, 2.78, 6.0, 0.23, 0.02];
stringArr = ['1','2','3','4','5','6'];
newArr = [];
newArr2 = [];

// ***** Map *****
var map1 = array.map(Math.floor); // map sends one value to function

var map2 = array.map(function(n){
	return n * 2;
});


// ***** forEach *****
function show(value, i, arr) { // forEach sends 3 values to function
	newArr2 = newArr2.push(value)
	return newArr2;
};
var each1 = array.forEach(show);

// var n = 0;
// array.forEach(function add(value) { 
// 	n += value; 
// 	newArr = newArr.push(n);
// 	return newArr;
// });


// ***** filter *****
var filter1 = array.filter(function larger(element) {
	return element >= 2;
});


console.log(map1);
console.log(map2);
console.log(newArr2); // forEach1
console.log(newArr); // forEach 2
console.log(filter1)


// map, each, and filter take a (function)