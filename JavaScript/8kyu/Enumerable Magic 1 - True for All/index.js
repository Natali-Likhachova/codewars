/*Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns
true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true,
since technically nothing failed the test.

Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all*/

/* Link: https://www.codewars.com/kata/54598d1fcbae2ae05200112c*/

// Long Solution
function all( arr, fun ) {
    for(let i = 0; i < arr.length; i++) {
        if(!fun(arr[i])) {
            return false;
        }
    }
    return true;
}

// Short Solution
function all( arr, fun ){
    return arr.every(fun)
}