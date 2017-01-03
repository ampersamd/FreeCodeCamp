//Performs search and replace on string using arguments provided and returns new string
//1st argument: string to perform search and replace on
//2nd argument: word to be replaced
//3rd argument: word to substitute 

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function myReplace(str, before, after) {
  var words = str.split(" ");
  
  if (before[0] == before[0].toUpperCase()) {
    after = capitalize(after);
  }

  for (i=0; i< words.length; i++) {
    if (words[i] == before) {
      words.splice(i,1, after);
    }
  }
  str = words.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
