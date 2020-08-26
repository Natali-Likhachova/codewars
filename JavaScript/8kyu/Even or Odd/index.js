/*Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even
numbers or "Odd" for odd numbers.*/

/* Link: https://www.codewars.com/kata/even-or-odd/javascript */

// Long Solution
function even_or_odd(number) {
    if (number % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

// Short Solution
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
