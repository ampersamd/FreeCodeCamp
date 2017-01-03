//Return an array consisting of the largest number from each provided sub-array

function largestOfFour(arr) {
  
  largestList = [];
  
  for (i = 0; i < arr.length; i++) {
	var tempArray = arr[i];
	tempArray.sort(function(a,b) {
		return b - a;
	});
	
	largestList.push(tempArray[0]);
  }

  
  return largestList;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

