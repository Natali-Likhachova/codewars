/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done
before, or after the addition.

The binary number returned should be a string. */

/* Link: https://www.codewars.com/kata/551f37452ff852b7bd000139 */

// Solution
function addBinary(a,b) {
    return (a + b).toString(2);
}

// Another Solution
const addBinaryy = (a, b) => (a + b).toString(2);