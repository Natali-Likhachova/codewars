/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

/* Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9*/

// Long Solution
function findShort(s){
    let arryS = s.split(' '),
        arryL = [];

    for (let i = 0; i<arryS.length; i++) {
        arryL.push(arryS[i].length);
    }

    return Math.min.apply(Math, arryL);
}

// Short Solution
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}