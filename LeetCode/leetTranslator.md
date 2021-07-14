let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function leetTranslator(string){
  // lowecase all letters and remove spaces in middle of word 
  let str = string.toLowerCase().replace(/ /g,'')
  
  // build new string w/ leetTranslator
  let newString = '';
  
  // iterate through the string 
  for (let i=0; i<str.length; i++){
    let eachLetter = str[i]

    // look in letters array and find the index of eachLetter i.e 5
    let indexOfLetter = letters.indexOf(eachLetter); 

    // in leetChars array look for the indexOfLetter -concatanate to NewString variable 
    newString += leetChars[indexOfLetter];
  }
  //return a new string
  return newString;
}

leetTranslator('Sequoia National Park')    // => 'ph|_|115+@(|<'
