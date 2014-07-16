var myNumbers = [ -1, 2, -3, 4, -5, 6];


var sqrNumbers = myNumbers.map(function square(num) {
    return num * num;
});

var absNumbers = sqrNumbers.map(function sqrRoot(num) {
    return Math.sqrt(num);
});


console.log(absNumbers);