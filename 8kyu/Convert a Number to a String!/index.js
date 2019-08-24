/*We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`
numberToString(999); // returns '999';`*/

/* Link: https://www.codewars.com/kata/5265326f5fda8eb1160004c8 */

// Long Solution
function numberToString(num) {
    return String(num);
}

// Short Solution
function numberToString(num) {
    return num + '';
}
