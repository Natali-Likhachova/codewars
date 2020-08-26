/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the
threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

/* Link: https://www.codewars.com/kata/52fba66badcd10859f00097e*/

// Long Solution
function disemvowel(str) {
    let arrStr = [...str];
    for (var i=0; i<arrStr.length; i++) {
        if (arrStr[i] == 'i') {
            delete arrStr[i];
        } else if (arrStr[i] == 'a') {
            delete arrStr[i];
        } else if (arrStr[i] == 'o') {
            delete arrStr[i];
        } else if (arrStr[i] == 'O') {
            delete arrStr[i];
        } else if (arrStr[i] == 'I') {
            delete arrStr[i];
        } else if (arrStr[i] == 'e') {
            delete arrStr[i];
        } else if (arrStr[i] == 'u') {
            delete arrStr[i];
        }
    }
    return arrStr = arrStr.join('');
}

// Short Solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
