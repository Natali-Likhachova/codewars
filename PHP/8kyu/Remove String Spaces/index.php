<?php
/* Simple, remove the spaces from the string, then return the resultant string. */

/* Link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5 */

// Solution
function no_space(string $s): string {
  return str_replace(' ', '', $s);
}