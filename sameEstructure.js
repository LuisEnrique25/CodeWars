/* Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array. 



------Should Return True
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ); 

------Should Return False
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ); 

// should return false
[1,[1,1]].sameStructureAs( [2,[2]] )

*/
const arr1 = [ 1, 1, 1 ];
const arr2 = [ 2, 2, 2 ];

const arr3 = [ 1, [ 1, 1 ] ];
const arr4 = [ 2, [ 2, 2 ] ] ;

const arr5 = [ 1, [ 1, 1 ] ];
const arr6 = [ [ 2, 2 ], 2 ];

const arr7 = [ 1, [ 1, 1 ] ];
const arr8 = [ [ 2 ], 2 ] ;

const arr9 = [ [ [ ], [ ] ] ];
const arr10 =[ [ [ ], [ ] ] ];

const arr11 = [ [ [ ], [ ] ] ];
const arr12 = [ [ 1, 1 ] ] ;

const arr13 = [ 1, [1, 1]];
const arr14 = [ 2, [2]];


 Array.prototype.sameStructureAs = function (other) {
    
    if (this.length !== other.length) return false;
    for(let i = 0; i<=this.length; i++){
        if(Array.isArray(this[i])){
            if(Array.isArray(this[i]) !== Array.isArray(other[i]) ) return false;
            if(this[i].length !== other[i].length) return false;
            for (let j = 0; j < this[i].length; j++) {
                if(Array.isArray(this[i][j]) !== Array.isArray(other[i][j]) )return false; 
                //console.log(this[i][j])
                
            }
        }
        if(Array.isArray(this[i]) !== Array.isArray(other[i]) )return false; 
    }
    return true;
 }
 
 Array.prototype.sameStructureAsP = function (other) {
    //console.log(this);
    
    if (this.length !== other.length) return false;
    for(let i = 0; i<this.length; i++){
        //console.log(this[i])
        if(Array.isArray(this[i])){
            if(Array.isArray(this[i]) !== Array.isArray(other[i]) ) return false;
            if(this[i].length !== other[i].length) return false;
            for (let j = 0; j < this[i].length; j++) {
                if(Array.isArray(this[i][j]) !== Array.isArray(other[i][j]) )return false; 
                //console.log(this[i][j])
                
            }
        }
        if(Array.isArray(this[i]) !== Array.isArray(other[i]) )return false; 
    }
    return true;
 }

 console.log("should be TRUE ---> " + arr1.sameStructureAs(arr2));
 console.log("should be TRUE ---> " + arr3.sameStructureAs(arr4));
 console.log("should be FALSE ---> " + arr5.sameStructureAs(arr6));
 console.log("should be FALSE ---> " + arr7.sameStructureAs(arr8));
 console.log("should be TRUE ---> " + arr9.sameStructureAs(arr10));
 console.log("should be FALSE ---> " + arr11.sameStructureAs(arr12));
 console.log("---------------------------")
 console.log("---------------------------")
 console.log("should be FALSE ---> " + arr13.sameStructureAs(arr14));