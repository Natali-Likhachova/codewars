/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your
point to the given array!*/

/* Link: https://www.codewars.com/kata/5601409514fc93442500010b */

// Long Solution
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    var sumPoint = 0,
        average;

    for (var i=0; i<classPoints.length; i++){
        sumPoint = sumPoint + classPoints[i];
    }
    average = Math.floor(sumPoint / classPoints.length);

    if (average < yourPoints){
        return true;
    } else {
        return false;
    }
}

// Short Solution
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
        classAvg += classPoints[i];
    }
    classAvg = classAvg/classPoints.length;
    return yourPoints > classAvg;
}

