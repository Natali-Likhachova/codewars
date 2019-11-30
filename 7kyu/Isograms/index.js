/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case*/

/* Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1*/

// Long Solution
function isIsogram(str){
    const strLower  = str.toLocaleLowerCase();
    const arrayStr = strLower.split('');

    const result = arrayStr.filter((item, index) => arrayStr.indexOf(item) !== index);

    if (result.length == 0) {
        return true;
    } else {
        return false;
    }
}

// Short Solution
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}