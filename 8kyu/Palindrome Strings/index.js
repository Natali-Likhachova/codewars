/*Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false*/

/* Link: https://www.codewars.com/kata/57a5015d72292ddeb8000b31 */

// Long Solution
function isPalindrome(line) {
    var line = line + "",
        splitLine = line.split(""),
        reverseLine = splitLine.reverse(),
        joinLine = reverseLine.join("");

    if (line === joinLine){
        return true;
    } else {
        return false;
    }
}

// Short Solution
function isPalindrome(line) {
    line = '' + line;
    return line === (line.split('').reverse().join(''));
}

