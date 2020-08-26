/*Task
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two
neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number, find the number which is written in the radially opposite position to firstNumber.

Example
For n = 10 and firstNumber = 2, the output should be

circleOfNumbers(n, firstNumber) === 7


Input/Output
[input] integer n

A positive even integer.

Constraints: 4 ≤ n ≤ 1000.

[input] integer firstNumber/first_number

Constraints: 0 ≤ firstNumber ≤ n - 1

[output] an integer*/

/* Link: https://www.codewars.com/kata/58841cb52a077503c4000015*/

// Solution
function circleOfNumbers(n, firstNumber) {
    var half = n / 2, result;

    if (firstNumber < half){
        result = firstNumber + half;
    } else {
        result = half - firstNumber;
    }

    if (result < 0){
        result = result * -1;
    }
    return result;
}

