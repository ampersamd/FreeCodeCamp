//Convert a string to spinal case

function spinalCase(str) {
  var wordRe = /[A-Z]?[a-z]+/g;
  var words = str.match(wordRe);

  for(i=0; i< words.length; i++) {
    words[i] = words[i].toLowerCase();
  }
  
  str = words.join("-");
  return str;
}

spinalCase('This Is Spinal Tap');
