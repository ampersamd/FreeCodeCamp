//checks if inputted string is a palindrome
//ignores all non-alphanumeric characters

function palindrome(str) {
	var lowerAlphaNum = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  	var phraseArray = lowerAlphaNum.split("");
  	var reversePhraseArray = phraseArray.slice().reverse();

	var i = phraseArray.length;
	while (i--) {
		if (phraseArray[i] !== reversePhraseArray[i]) return false;
	}
 	return true;

}

palindrome("eye");
