// Kata: https://www.codewars.com/kata/57cc981a58da9e302a000214

/* Description:  You will be given an array (a) and a limit value
(limit). You must check that all values in the array are below or equal to
the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

// Solution:
function smallEnough(a, limit){

 function small(element, index, array) {
  return element <= limit;
 }
return a.every(small);
}
