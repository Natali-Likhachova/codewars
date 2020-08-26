/*Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs! */

/* Link: https://www.codewars.com/kata/59342039eb450e39970000a6 */

// Long Solution
function oddCount(n){
    var m = Math.floor(n / 2);
    return m;
}

// Short Solution
const oddCount = n => Math.floor(n/2) ;