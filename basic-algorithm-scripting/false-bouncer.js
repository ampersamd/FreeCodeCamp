//Remove all falsy values from an array

function bouncer(arr) {
	var arrSpliced = arr;
	for (i = 0; i < arr.length; i++) {
		if (arr[i]) {
		} else {
			arrSpliced.splice(i, 1);
			i--;
		}
	}
	return arrSpliced;
}

bouncer([7, "ate", "", false, 9]);
