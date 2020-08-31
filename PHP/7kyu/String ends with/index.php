<?php
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument
(also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

/* Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/php */

// Solution
function solution($str, $ending) {
  if(strrchr($str, $ending) == $ending) {
    return true;
  } else {
    return false;
  }
}
