/* Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t */

/* Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4 */

// Long Solution
function isPalindrome(x) {
    var smallX = x.toLowerCase(),
        splitX = smallX.split(''),
        reverseX = splitX.reverse(),
        joinX = reverseX.join("");

    if (smallX === joinX){
        return true;
    } else {
        return false;
    }
}

// Short Solution
function isPalindrome(x) {
    return x.toUpperCase() == x.split('').reverse().join('').toUpperCase();
}