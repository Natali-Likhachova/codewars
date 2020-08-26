/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

/* Link: https://www.codewars.com/kata/546e2562b03326a88e000020*/

// Long Solution
function squareDigits(num){
    let arr = num.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr = +arr.join('');
}

// Short Solution
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}