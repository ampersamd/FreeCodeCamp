//Remove all elements from the initial array (arr) that are of the same value as the following arguments (x,y, and/or z)

function destroyer(arr, x, y, z) {
  // Remove all the values
  for (i = 0; i< arr.length; i++) {
  	if (arr[i] == x) {
  		arr.splice(i, 1);
  		i--;
  	} else if (y !== undefined && arr[i] == y) {
  		arr.splice(i, 1);
  		i--;
  	} else if (z !== undefined && arr[i] == z) {
  		arr.splice(i, 1);
  		i--;
  	}
  	
  }
	return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

