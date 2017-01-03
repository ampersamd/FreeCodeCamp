//splits array into seperate arrays of a specified size and returns them in a 2D array

function chunkArrayInGroups(arr, size) {
  var iter = Math.ceil(arr.length / size);
  var arrGroups = [];
  
  for (i= 0; i < iter; i++) {
  	var tmparr = [];
  	while (tmparr.length < size && arr.length !== 0) {
  		tmparr.push(arr[0]);
  		arr.shift();
  		console.log(arr);
  		console.log(arr.length);
  	}
  	arrGroups.push(tmparr);
  }
  
  return arrGroups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
