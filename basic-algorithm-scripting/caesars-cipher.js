//decodes inputted string according to caesars cipher
//learn more: https://en.wikipedia.org/wiki/Caesar_cipher

function rot13(str) { // LBH QVQ VG!
  
  var phraseArr = str.split("");
  lettersCiphed = [];
  asciiCiphed = [];
  asciiUnciphed = [];
  lettersUnciphed = [];
  
  for (i=0; i < phraseArr.length; i++) {
  	var tmpCharCode = phraseArr[i].charCodeAt();
  	lettersCiphed.push(phraseArr[i]);
  	asciiCiphed.push(tmpCharCode);
  	
  	if (tmpCharCode >= 65 && tmpCharCode <= 90) {
  		
		if (tmpCharCode <= 77) {
  			tmpCharCode = tmpCharCode + 26;
  			tmpCharCode = tmpCharCode - 13;
  		} else {
  			tmpCharCode = tmpCharCode - 13;
  		}  		
  	}
  	asciiUnciphed.push(tmpCharCode);
  }
  
  for (i = 0; i < asciiUnciphed.length; i++) {
  	lettersUnciphed.push(String.fromCharCode(asciiUnciphed[i]));
  }

	phraseUnciphed = lettersUnciphed.join("");
	return phraseUnciphed;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
