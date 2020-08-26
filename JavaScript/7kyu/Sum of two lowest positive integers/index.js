/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive
integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

/* Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014 */

// Long Solution
function sumTwoSmallestNumbers(numbers) {
    let minNums = [numbers[0], numbers[1]].sort(function(x, y) {return x-y});

    for(let i = 2; i < numbers.length; i++){
        let num = numbers[i];

        if(num < minNums[0]) {
            minNums = [num, minNums[0]];
        } else if(num < minNums[1]){
            minNums[1] = num;
        }
    }
    return minNums[0] + minNums[1];
}

// Short Solution
function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};