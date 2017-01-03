//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array

function mutation(arr) {
	testWord = arr[0].toLowerCase().split("");
	matchWord = arr[1].toLowerCase().split("");
	
	for (i = 0; i < matchWord.length; i++) {
		if (testWord.indexOf(matchWord[i]) < 0) {
			return false;
		}
	}
	return true;		
}

mutation(["hello", "hey"]);
