// Kata: https://www.codewars.com/kata/57cc9fd358a06b22a4000248

/* Description:  You are provided a 2 dimensional array. You must test if
each value within the sub arrays is larger than the given test value n.

Return true if so, false if not.

Code length limit : *** 60 characters ****/

// Solution:
function everyEvery(a,n){return a.every(x=>x.every(x=>x>n))}
