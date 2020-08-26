/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.*/

/* Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3*/

// Long Solution
function getCount(str) {
    var vowelsCount = 0;

    let arrStr = str.split('');
    for (var i=0; i<arrStr.length; i++) {
        if (arrStr[i] == 'a') {
            vowelsCount = vowelsCount + 1;
        } else if (arrStr[i] == 'e') {
            vowelsCount = vowelsCount + 1;
        } else if  (arrStr[i] == 'i') {
            vowelsCount = vowelsCount + 1;
        } else if (arrStr[i] == 'o') {
            vowelsCount = vowelsCount + 1;
        } else if (arrStr[i] == 'u') {
            vowelsCount = vowelsCount + 1;
        }
    }

    return vowelsCount;
}

// Short Solution
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}