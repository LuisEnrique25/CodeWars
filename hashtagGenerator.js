/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized, and remaining letters lowercased.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

const prb1= "Hello viewers this is a test for the hashtag generator function";
const sol1="#HelloViewersThisIsATestForTheHashtagGeneratorFunction";
const prb2= "saludos humanos saludos desde marte";
const sol2="#SaludosHumanosSaludosDesdeMarte";
const prb3= "";
const sol3= false;
const prb4 = "    Hello     World   ";
const sol4 = "#HelloWorld";
const prb5 = " Hello there thanks for trying my Kata";
const sol5 = "#HelloThereThanksForTryingMyKata";
const prb6 = "a".repeat(140);

function generateHashtag (str) {
  if (!str) return false; //si recibe un string vacio retorna false

  //let words = str.trim().split(/\s+/); 
  let words = str.split(' ').filter(Boolean); //elimina los espacios vacios y divide el string en palabras dentro de un array, usando como separador los espacios en blanco.
  // .filter(Boolean) elimina espacios al inicio y al final y divide el string en palabras dentro de un array, usando como separador los espacios en blanco.
  if(words.length === 0) return false; //si el array de palabras esta vacio retorna false
  let hashtag = "#";

  for (let word of words) {
    hashtag += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    hashtag += word.charAt(0).toUppercase() + word.slice(1).toLowerCase();
    //convierte la primera letra de cada palabra a mayuscula y el resto a minuscula, y lo concatena al hashtag
  }

  if (hashtag.length > 140) return false; //si la longitud del hashtag es mayor a 140 caracteres retorna false

  return hashtag;
}


function testGenerateHashtag(str, expected) {
    let result = generateHashtag(str);

  if(result === expected){
    console.log("Test passed!");
  } else {
    console.log("Test  failed.");
  }
}

console.log(generateHashtag(prb6));
console.log(generateHashtag(prb3));
console.log(generateHashtag(" ".repeat(200)));

/*
console.log(generateHashtag(prb1, sol1));
testGenerateHashtag(prb1, sol1);
console.log(generateHashtag(prb2, sol2));
testGenerateHashtag(prb2, sol2);
console.log(generateHashtag(prb3, sol3));
testGenerateHashtag(prb3, sol3);
console.log(generateHashtag(prb4, sol4));
testGenerateHashtag(prb4, sol4);
console.log(generateHashtag(prb5, sol5));
testGenerateHashtag(prb5, sol5);
*/
//console.log(generateHashtag()); 
    // "#HelloThereThanksForTryingMyKata"
