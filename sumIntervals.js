 /*
    Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 */
const exmple = [
    [1, 5],
    [7, 10]
]
const arr1 =[
    [1, 4],  //  
    [7, 10], // 
    [3, 5]   // 
];  //  ---> 7    // en el caso de los intervalos [1, 4] y [3, 5]
                // como 4 es mayor que 3, entonces se cuenta como [1, 5] -> y  [7, 10] 
const arr2 =[
   [1, 2],  // 2
   [6, 10], // 5
   [11, 15] // 5
] // ---> 9



function sumIntervals(arr){
//Ordenamos el array de menor a mayor
   arr.sort((a, b) => a[0] - b[0]);
   let intervals = 0;
   let [start, end] = arr[0]  
    /*
    let start = arr[0][0];
    let end = arr[0][1]; 
    */
   for(let i = 1; i<arr.length; i++){
      let [currentStart, currentEnd] = arr[i]
      if(currentStart <= end){
        end = Math.max(end, currentEnd);
      }else{
        intervals += end - start;
        [start, end] = [currentStart, currentEnd];
        }
    }
    //al final sumamos el intervalo de la ultima pocision del array
    intervals += end - start;
   return intervals
   
}

//console.log(sumIntervals(exmple));
console.log(sumIntervals(arr1));
console.log(sumIntervals(arr2));
