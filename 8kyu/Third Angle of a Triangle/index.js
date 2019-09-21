/*You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.*/

/* Link: https://www.codewars.com/kata/5a023c426975981341000014*/

// Solution
function otherAngle(a, b) {
    var result = 180 - (a+b);
    return result;
}

