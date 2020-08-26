/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible,
containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

/* Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac*/

// Long Solution
function longest(s1, s2) {
    let s = s1 + s2,
        arrayS = s.split(''),
        result = [];

    for (let str of arrayS){
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    result = result.sort();
    return result.join('');
}

// Short Solution
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}
