/*Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34*/

/* Link: https://www.codewars.com/kata/56dec885c54a926dcd001095*/

// Long Solution
function opposite(number) {
    number = number * -1;
    return number;
}

// Short Solution
function opposite(number) {
    return number * (-1);
}
