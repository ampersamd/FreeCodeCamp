//Takes each character, get its missing DNA pairing, and return the results as a 2d array.
//Pairings: ['A','T'],['G','C'], letter ordering not important;

function pairElement(str) {
  var strChar = str.split("");
  var matches = [];
  var pairings = {"A":"T","T":"A","C":"G","G":"C"};
  
  for (i=0; i<strChar.length; i++) {
    matches.push([strChar[i],pairings[strChar[i]]]);
  }
  return matches;
}

pairElement("GCG");
