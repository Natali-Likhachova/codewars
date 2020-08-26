/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students
come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

/* Link: https://www.codewars.com/kata/563e320cee5dddcf77000158 */

// Long Solution
function getAverage(marks){
    var sum = 0,
        quantityMarks = marks.length,
        result;

    for (var i=0; i<quantityMarks; i++){
        sum = sum + marks[i];
    }

    result = 	Math.floor(sum / quantityMarks);
    return result;
}

// Short Solution
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
