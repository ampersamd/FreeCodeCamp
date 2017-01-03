//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b) {return a-b;});
  
  if (num < arr[0]) {
  	return 0;
  } else if (num > arr[arr.length - 1]) {
  	return arr.length;
  } else {
  		for (i=0; i< arr.length; i++) {
  	
  			if (num > arr[i] && num < arr[i+1]) {
  				return i+1;
  			} else if (num == arr[i]) {
  				return i;
  			}
  		}
  	
  }

}
getIndexToIns([40, 60], 50);
