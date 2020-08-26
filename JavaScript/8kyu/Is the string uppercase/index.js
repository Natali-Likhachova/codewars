/*Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true*/

/* Link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b */

// Solution
String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};
