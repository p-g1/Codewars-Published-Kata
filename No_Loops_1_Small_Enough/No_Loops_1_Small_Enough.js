// Kata: https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2

/* Dscription:  *** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). You must check that
all values in the array are below or equal to the limit value. If they are,
return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops.

Looking for more, loop-restrained fun? Check out the other kata in the series:

<a> https://www.codewars.com/kata/no-loops-2-you-only-need-one</a>

<a> https://www.codewars.com/kata/no-loops-3-copy-within</a>*/

// Solution:
function smallEnough(a, limit){

function small(element, index, array) {
  return element <= limit;
}

return a.every(small);
}
