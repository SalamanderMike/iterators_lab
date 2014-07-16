// ***** Not refactored yet *****

places = [4.73, 2.78, 6.0, 0.23, 0.02];

var Min = (function() {
  var nearestLocation = {
    distance: function(locations){
    	
			for (var a = 0; a < locations.length; a++) {
					for (var b = 0; b < locations.length; b++) {
						if (locations[a] < locations[b]) {
							var container = locations[a]; // hold onto one value
							locations[a] = locations[b];	// Swap value, then...
							locations[b] = container;			// put number back in
						}
					}
				}

      return locations[0];
    }
  };

  return nearestLocation;
})();

module.exports = Min;

console.log(Min.distance(places));