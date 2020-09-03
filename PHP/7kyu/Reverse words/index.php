<?php
/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the
string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

/* Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/php */

// Long Solution
function reverseWords($str) {
    $array = explode(" ", $str);
    $result = [];

    foreach ($array as $item) {
        array_push($result, strrev($item));
    }

    return implode( ' ', $result );
}

// Short Solution
function reverseWordss($str) {
    return implode(' ', array_map('strrev', explode(' ', $str)));
}