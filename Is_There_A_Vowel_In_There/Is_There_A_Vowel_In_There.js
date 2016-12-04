// Solution: https://www.codewars.com/kata/57cff961eca260b71900008f

/* Description: Given an array of numbers (s), check if any of the numbers are
the character codes for lower case vowels.

If they are, change the array value to a string of that vowel.

Return the resulting array.*/

// Solution:

function isVow(s){
  for (var i = 0; i < s.length; i++) {
    if (s[i] == 97) s[i] = 'a';
    else if (s[i] == 101) s[i] = 'e';
    else if (s[i] == 105) s[i] = 'i';
    else if (s[i] == 111) s[i] = 'o';
    else if (s[i] == 117) s[i] = 'u';
    }
  return s;
}
