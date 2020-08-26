/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

/* Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039*/

// Long Solution
function accum(s) {
    let count = 1,
        result = "";

    for(var i = 0; i < s.length; i++) {
        result += s[i].toUpperCase();

        for(var j = 1; j < count; j++) {
            result += s[i].toLowerCase();
        }
        count++;

        if(i != (s.length - 1)) {
            result += '-';
        }
    }
    return result;
}

// Short Solution
function accum (s) {
    return [...s].map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}