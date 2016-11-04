// Kata: https://www.codewars.com/kata/57cc91361ccdc727f90000cf

/* Description:  Maximum Solution Length *** 43 Characters ***

You will be given an array (a) and a value (x). All you need to do is check
whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the
array contains the value, false if not. With strings you will need to account
for case.*/

// Solution:
function check(a,x){return a.some(z=>z==x)}
