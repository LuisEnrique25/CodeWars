/**La funcion resibe numero romano como string y debera retornar su valor decimal
 * 
 * Ejemplos: 
 * - Recibe X retorna 10 
 * - Recibe XV retorna 15
 * - Recibe MCMXC retorna 1990
 * - Recibe MMVIII retorna 2008
 * - Recibe MDCLXVI retorna 1666
*/
/*
1 = I
5 = V
10 = X
50 = L
100 = C
500 = D
1000 = M
*/
const rom1 = 'MDCLXVI';  //1666
const rom2 = 'MMVIII'; //2008
const rom3 = 'MCMXC'; //1990
const rom4 = 'MCMXCIX'; //1999

function getDecimal(string){
    let str = string.split('');
    let decimal = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'M') decimal += 1000;
        if(str[i] === 'C' & str[i+1] === 'M' ) {
            decimal += 900;
            i += 1;
        }
        if(str[i] === 'D') decimal += 500;
        if(str[i] === 'C' & str[i+1] === 'D'){
            decimal += 400;
            i += 1;
        }
        if(str[i] === 'C' & str[i+1] !== 'M' ) decimal += 100;
        if(str[i] === 'X' & str[i+1] === 'C' ) {
            decimal += 90;
            i += 1;
        }
        if(str[i] === 'L') decimal += 50;
        if(str[i] === 'X' & str[i+1] === 'L'){
            decimal += 40;
            i += 1;
        }
        if(str[i] === 'X' & str[i+1] !== 'C') decimal += 10;
        if(str[i] === 'I' & str[i+1] === 'X' ) {
            decimal += 9;
            i += 1;
        }
        if(str[i] === 'V') decimal += 5;
        if(str[i] === 'I' & str[i+1] === 'V'){
            decimal += 4;
            i += 1;
        }
        if(str[i] === 'I' & str[i+1] !== 'X') decimal += 1;
    }


   return decimal;
}


console.log(getDecimal(rom1)===1666);
console.log(getDecimal(rom2) === 2008);
console.log(getDecimal(rom3) === 1990);
console.log(getDecimal(rom4) === 1999);

// CODIGO MAS CORTO
console.log('---ShortCode---');

function shortCode(romano){
    let decimal = 0;
    let array = romano.split('');
    const data = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < romano.length; i++) {
        if(data[romano[i]] < data[romano[i+1]]){ 
            decimal += (data[romano[i+1]] - data[romano[i]]);
            i++
        } else{ 
            decimal += data[romano[i]]};
    }
    return decimal;
}
console.log(shortCode(rom1) === 1666);
console.log(shortCode(rom2) === 2008);
console.log(shortCode(rom3) === 1990);
console.log(shortCode(rom4) === 1999);
console.log(shortCode('XXI'));

