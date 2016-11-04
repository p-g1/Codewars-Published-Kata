// Kata: https://www.codewars.com/kata/57cc91a458a06b1492000318

/* Description:  Maximum Solution Length *** 50 Characters ***

You will be given an array (a) and a limit value (limit). You must check
that all values in the array are below or equal to the limit value. If they
are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops.

*/

// Solution:
function smallEnough(a,l){return a.every(a=>a<=l)}
