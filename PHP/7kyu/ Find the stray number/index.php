<?php
/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

/* Link: https://www.codewars.com/kata/57f609022f4d534f05000024/php */

// Long Solution
function stray($arr)
{
    if ($arr[0] == $arr[1]) {
        $delete = $arr[0];

        foreach ($arr as $key => $item){
            if ($item == $delete){
                unset($arr[$key]);
            }
        }
    } else if ($arr[0] == $arr[2]) {
        $delete = $arr[0];

        foreach ($arr as $key => $item){
            if ($item == $delete){
                unset($arr[$key]);
            }
        }
    }

    return current($arr);
}

// Short Solution
function strayy($arr)
{
    sort($arr);
    return $arr['0'] ==  $arr['1'] ? end($arr) : $arr['0'];
}