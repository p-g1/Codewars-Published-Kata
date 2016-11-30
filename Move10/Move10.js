// Kata: https://www.codewars.com/kata/57cf50a7eca2603de0000090

/* Description: Move every letter in the provided string forward 10
letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/

// Solution:
function moveTen(s){
  s = s.split('');

  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt(0);
    if (s[i]+10 <= 122) s[i] = s[i]+10;
    else if (s[i]+10>122) s[i] = 96 + ((s[i]+10)-122)
    s[i] = String.fromCharCode(s[i]);
    }

  return s.join('');
}
