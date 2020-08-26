/*Complete the function which converts a binary number (given as a string) to a decimal number.*/

/* Link: https://www.codewars.com/kata/57a5c31ce298a7e6b7000334     */

// Long Solution
function binToDec(bin){
    var result;
    result = parseInt(bin, 2);
    return result;
}

// Short Solution
function binToDec(bin){
    return parseInt(bin,2);
}