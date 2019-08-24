/*Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

/* Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e */

// Long Solution
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
        str+=s;
    return str;
}

// Short Solution
function repeatStr (n, s) {
    return s.repeat(n);
}