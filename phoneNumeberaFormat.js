/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. 
Ejemplo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] -> ¨(123) 456-7890¨

*/

const nmbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const nmbr1 = [5, 2, 5, 2, 5, 6, 8, 0, 9, 3];
const nmbr2 = [8, 0, 0, 1, 5, 2, 7, 4, 2, 7];
 
function createPhoneNumber(numbers){
    return "(" + numbers.slice(0, 3).join("") + ") " + numbers.slice(3, 6).join("") + "-" + numbers.slice(6, 10).join("");
}

console.log(createPhoneNumber(nmbr));
console.log(createPhoneNumber(nmbr1));
console.log(createPhoneNumber(nmbr2));