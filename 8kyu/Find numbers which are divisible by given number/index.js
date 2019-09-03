/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]*/

/* Link: https://www.codewars.com/kata/55edaba99da3a9c84000003b */

// Long Solution
function divisibleBy(numbers, divisor){
    var result = [];

    for (var i=0; i<numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// Short Solution
function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0);
}
