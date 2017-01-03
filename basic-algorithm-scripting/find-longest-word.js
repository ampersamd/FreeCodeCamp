//returns the length of the longest word in a given string

function findLongestWord(str) {
  words = str.split(" ");
  
  var count = 0;
  for (i = 0; i < words.length; i++ ) {
  	if (words[i].length > count) {
  		count = words[i].length;
  	}
  	
  }
  return count;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
