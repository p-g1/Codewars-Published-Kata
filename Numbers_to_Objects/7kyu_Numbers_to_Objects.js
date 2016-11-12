// Kata: https://www.codewars.com/kata/57ced2c1c6fdc22123000316

/* Description:  You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the
corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower
case letters. The input array will not be empty.

*/

// Solution:
function numObj(s){
var sol = [];

  for (var i = 0; i < s.length; i++) {

    var myObj = new Object;
    var a = s[i];
    var b = String.fromCharCode(s[i]);
    myObj[a] = b;
    sol.push(myObj);
    }
  return sol;
}
