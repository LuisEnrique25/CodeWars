/*
La funcion recibira un array de 5 numeros del 1 al 6 simulando la tirada de dados, la funcion debera retonar el valor de las tiradas siguiendo las siguientes reglas:
Tirada ----------- Valor
3 veces 1 -------> 1000
3 veces 6 -------> 600
3 veces 5 -------> 500
3 veces 4 -------> 400
3 veces 3 -------> 300
3 veces 2 -------> 200
1 vez 1 --------> 100
1 vez 5 --------> 50

Ejemplo:
    Recibe       Retorna
5 1 3 4 1       250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1       1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4       450:  400 (for three 4s) + 50 (for the 5)
*/

const trow1 =[5, 1, 3, 4, 1];   //250   [2, 0, 1, 1, 1, 0]
const trow2 =[1, 1, 1, 3, 1];   //1100  [4, 0, 1, 0, 0, 0]
const trow3 =[2, 4, 4, 5, 4];   //450   [0, 1, 0, 3, 1, 0]
const trow4 =[4, 4, 4, 3, 3];   //400   [0, 0, 2, 3, 0, 0]
const trow5 =[5, 5, 1, 1, 1];   //1100  [3, 0, 0, 0, 2, 0]
const trow6 =[2, 3, 4, 6, 2];   //0     [0, 2, 1, 1, 0, 1]

//   resolucion larga
function score (dice){
    let finaleScore = 0;
    let count1= 0;
    let count2= 0;
    let count3= 0;
    let count4= 0;
    let count5= 0;
    let count6= 0;
    
    for(let i = 0; i < dice.length; i++){
        if(dice[i] === 1) {
            count1++;
        }else if(dice[i] === 2){ count2++;
        }else if(dice[i] === 3){ count3++;
        }else if(dice[i] === 4){ count4++;
        }else if(dice[i] === 5){ count5++;
        }else if(dice[i] === 6){ count6++;
        }
    }
    if(count1>=3){
        count1 = 1000 + (count1-3)*100;
    }else{count1*=100}


    count2 = (count2 === 3) ? 200  : 0;
    count3 = (count3 === 3) ? 300  : 0;
    count4 = (count4 === 3) ? 400  : 0;
    /*
    if(count5>=3){
        let rest = count5-3;
        count5 = 500 + rest*50;
    }else{ count5= count5*50;}
    */
    count5 = (count5>=3) ? 500 + ((count5-3)*50) : count5*=50; //vesion siimplificada
    count6 = (count6 === 3) ? 600  : 0;


    finaleScore = count1 + count2 + count3 + count4 + count5 + count6;
    let msg = '1: ' + count1 + '; 2: ' + count2 + '; 3: ' + count3 + '; 4: ' + count4 + '; 5: ' + count5 + '; 6: ' + count6 + '   ---> Finale Score: ' + finaleScore;
    return msg;
}



// solucion 2 mas compacta usando un array para el contador //
 function scoreTwo (dice){
     let counts = [0, 0, 0, 0, 0, 0];
     for (let i = 0; i < dice.length; i++) {
         counts[dice[i]-1]++;
        }
        counts[0] = (counts[0] >=3) ? 1000 + ((counts[0]-3)*100) : counts[0]*100;
        counts[1] = (counts[1] === 3) ? 200 : 0;
        counts[2] = (counts[2] === 3) ? 300 : 0;
        counts[3] = (counts[3] === 3) ? 400 : 0;
        counts[4] = (counts[4] >=3) ? 500 + ((counts[4]-3)*50) : counts[4]*50;
        counts[5] = (counts[5] === 3) ? 600 : 0;
        
    let total = counts.reduce((acum, curr) => acum + curr, 0);

    return total;
}
/*
console.log(score(trow1))
console.log(score(trow2))
console.log(score(trow3))
console.log(score(trow4))
console.log(score(trow5))
console.log(score(trow6))
*/
console.log(scoreTwo(trow1))
console.log(scoreTwo(trow2))
console.log(scoreTwo(trow3))
console.log(scoreTwo(trow4))
console.log(scoreTwo(trow5))
console.log(scoreTwo(trow6))
