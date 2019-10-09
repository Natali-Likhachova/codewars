/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case
 insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

/* Link: https://www.codewars.com/kata/55908aad6620c066bc00002a*/

// Long Solution
function XO(str) {
    let arryStr = [],
        arryX = [],
        arryO = [];

    str = str.toLowerCase();
    arryStr = str.split('');

    for (let i = 0; i < arryStr.length; i++) {
        if (arryStr[i] == 'x') {
            arryX.push(arryStr[i]);
        } else if (arryStr[i] == 'o') {
            arryO.push(arryStr[i]);
        }
    }

    if (arryX.length == arryO.length) {
        return true;
    } else {
        return false;
    }
}

// Short Solution
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
