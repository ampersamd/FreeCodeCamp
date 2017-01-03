//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities

function convertHTML(str) {
  var replacements = [[/\&/g, "&amp;"],[/</g, "&lt;"],[/>/g, "&gt;"],[/\"/g, "&quot;"],[/\'/g, "&apos;"]];
  for (i=0; i<replacements.length; i++) {
    str = str.replace(replacements[i][0], replacements[i][1]);
  }
  return str;
}

convertHTML("Dolce & Gabbana");
