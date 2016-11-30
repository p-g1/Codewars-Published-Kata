// Kata: https://www.codewars.com/kata/57cfd92c05c1864df2001563

/* Description:  You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet.
If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet.
If they pass 'a', start again at 'z'.

Exceptions:

If the character is 'c' or 'o', move it back 1 place.
For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's
original value.

Provided string will always be lower case, won't be empty and will have no
special characters.*/

//Solution:
function vowelBack(s){
  s = s.split('');

  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt(0);
    if (s[i] == 97 || s[i] == 117) {
      if (s[i]-5 < 97) s[i] = s[i]+21;
      else if (s[i]-5 > 97) s[i] = s[i]-5;
      }
    else if (s[i] == 99 ||s[i]== 111) s[i] = s[i]-1;
    else if (s[i] == 118 ||s[i]== 116 ||s[i]==102 || s[i] == 105) s[i] = s[i];
    else if (s[i]==101) s[i] = s[i]-4;
    else if (s[i]==100) s[i] = s[i]-3;
    else if (s[i]+9 <= 122) s[i] = s[i]+9;
    else if (s[i]+9>122) s[i] = 96 + ((s[i]+9)-122)
    s[i] = String.fromCharCode(s[i]);
    }

  return s.join('');
}
