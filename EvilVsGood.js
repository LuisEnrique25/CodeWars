/*
Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

On the side of Good we have:
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10

On the side of evil we have:
Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/

const good1 = '1 1 1 1 1 1';
const evil1 = '1 1 1 1 1 1 1';
const good2 = '0 0 0 0 0 10';
const evil2 = '0 1 1 1 1 0 0';
const good3 = '1 0 0 0 0 0';
const evil3 = '1 0 0 0 0 0 0';

function goodVsEvil(good, evil){
    const goodW = [1, 2, 3, 3, 4, 10];
    const evilW = [1, 2, 2, 2, 3, 5, 10];

    let arrayG = good.split(' ');
    let arrayE = evil.split(' ');

    let totWorthG = 0;
    let totWorthE = 0;

    for(let i = 0; i < goodW.length ; i++){
        totWorthG = (arrayG[i] * goodW[i]) + totWorthG;
    }
    for(let i = 0; i < evilW.length ; i++){
        totWorthE = (arrayE[i] * evilW[i]) + totWorthE;
    }
    if(totWorthG > totWorthE){
        return "Battle Result: Good triumphs over Evil";
    }else if( totWorthG < totWorthE){
        return 'Battle Result: Evil eradicates all trace of Good';
    }else{
        return "Battle Result: No victor on this battle field";
    }

}
/*
console.log( goodVsEvil(good1, evil1));
console.log( goodVsEvil(good2, evil2));
console.log( goodVsEvil(good3, evil3));
*/
function goodVsEvil2(good, evil){
    const goodW = [1, 2, 3, 3, 4, 10];
    const evilW = [1, 2, 2, 2, 3, 5, 10];

    let totWorthG = 0;
    let totWorthE = 0;

    for(let i = 0; i < goodW.length ; i++){
        totWorthG = (good.split(' ')[i] * goodW[i]) + totWorthG;
    }
    for(let i = 0; i < evilW.length ; i++){
        totWorthE = (evil.split(' ') * evilW[i]) + totWorthE;
    }
    if(totWorthG > totWorthE){
        return "Battle Result: Good triumphs over Evil";
    }else if( totWorthG < totWorthE){
        return 'Battle Result: Evil eradicates all trace of Good';
    }else{
        return totWorthE;
    }
}

console.log( goodVsEvil2(good1, evil1));
console.log( goodVsEvil2(good2, evil2));
console.log( goodVsEvil2(good3, evil3));
