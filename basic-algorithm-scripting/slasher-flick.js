//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
	var trimArr = arr.slice(howMany);
  
 	return trimArr;
}


slasher([1, 2, 3], 2);
