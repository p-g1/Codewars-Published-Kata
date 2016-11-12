// Kata: https://www.codewars.com/kata/57cec34272f983e17800001e

/* Description:  You will be given a string.

You need to return an array of three strings by gradually pulling apart the
string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1.
b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the
 original string, once originalstring.length == 1.

Example:

"exampletesthere"
becomes:
["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.*/

// Solution:
const popShift=s=>[s.slice(Math.ceil(s.length/2)).split("").reverse().join(""),s.slice(0,Math.floor(s.length/2)),s.slice(Math.floor(s.length/2),Math.ceil(s.length/2))];
