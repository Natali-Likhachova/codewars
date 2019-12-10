/*Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built
with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

/* Link: https://www.codewars.com/kata/56606694ec01347ce800001b */

// Long Solution
function isTriangle(a,b,c) {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        return true;
    } else {
        return false;
    }
}
// Short Solution
function isTriangle(a,b,c)
{
    return a + b > c && a + c > b && c + b > a;
}
