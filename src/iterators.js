
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;

      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };

      return max;
    }
  };

  return api;
})();

// console.log(Iterators)
// => {max: function () {...}}

module.exports = Iterators;


// Iterators: anonamous function invoked without params
// api = object {max: function()} returns an object key:value pair
// {max: number}
// if no array is sent to Iterators, then api is returned max:undefined
