//Translate the provided string to pig latin

function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.indexOf(str[0]) !== -1) {
    str += "way";

  } else {
    var vowel = /[^"aeiou"]+/;
    var test = vowel.exec(str);
    str = str.slice(test[0].length) + test + "ay";

  }
  return str;
}

translatePigLatin("consonant");
