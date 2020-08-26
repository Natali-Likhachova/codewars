/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

/* Link: https://www.codewars.com/kata/5715eaedb436cf5606000381 */

// Long Solution
function positiveSum(arr) {
    var sum = 0;

    for (var i=0; i<arr.length; i++){
        if(arr[i]>=0){
            sum = sum + arr[i];
        }
    }
    return sum;
}

// Short Solution
function positiveSum(arr) {
    return arr.reduce((n, x) => x > 0 ? n + x : n, 0)
}
