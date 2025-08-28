/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
*/ 


const str = "Hola mundo";
const str2 = "camel case word";
const str3 = "otro EjemPlo del ejerCicIo";
const str4 = "";

/*
function toCamellCase (string){
    if(string.length === 0) return "";
    string = string.toLowerCase();
    let array = string.split(" ");
    
    for(let i = 0; i < array.length; i++ ){
        let str = array[i].split("");
        str[0] = str[0].toUpperCase();
        array[i] = str.join('')
    }
    return array.join('');
}

console.log(toCamellCase(str));
console.log(toCamellCase(str2));
console.log(toCamellCase(str3));
console.log(toCamellCase(str4));

*/

String.prototype.camelCase=function(){
    //your code here
    if(this.length === 0) return "";
    let string = this.toLowerCase();
    let stringArray = string.split(" ");
    for(let i = 0; i< stringArray.length; i++){
        let word = stringArray[i].split("");
        word[0] = word[0].toUpperCase();
        stringArray[i] = word.join('');
    }
    return stringArray.join("");
  }

console.log(str.camelCase());
console.log(str2.camelCase());
console.log(str3.camelCase());
console.log(str4.camelCase());