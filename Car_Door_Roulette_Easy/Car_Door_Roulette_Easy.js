// Kata: https://www.codewars.com/kata/57d1203395497e99120000c9

/* Description: Cycling in London is dangerous. It's also fun. You kind of have
to balance the two.

When riding alongside a line of parked cars, people often refer to those that
ride too close as playing 'Car Door Roulette'. This is due to the fact that at
any second a door could open and knock you off.

In this kata, you will be given a string, that represents the line of parked
cars (each character is a car), and a value 'x' which represents your position
along that string, as the cyclist.

'\\' represents an open door of a car facing the same way you are going. This
is most painful to hit.

'/' represents an open door of a car facing you, this is less dangerous as you
 could, in theory, glance off it and be ok.

Your job is to check whether there are any open doors on your ride, whether
they knock you off, and how badly.

You need to account for the fact that people opening car doors don't leave them
open, so an open door value only lasts for a set period of time (or number of
steps along the line).

If you detect an open door '\\', check whether it is level wth you, or one or
two steps ahead of you. If it is, unlucky! Return 'Crash, Bang, Ouch!'.

As an open door '/' is less dangerous, you only need to check if it is level
with you, or 1 step ahead. If it is, return 'Knocked Off, Dust Yourself Down.'.

If neither occurs - you've made it! Return 'Plain Sailing!'.

Please note that despite the news making out otherwise, cycling accidents per
head are low. With that in mind, many of the random tests will return
'Plain Sailing'. To make sure there can be no cheating there are 100 random
tests.*/

// Solution:
function carD(s, x){
  var s = s.split('');
    if (x == s.length-1 && s[s.length-1] == '\\') return 'Crash, Bang, Ouch!';
    else if (x == s.length-2 && (s[s.length-2] == '/'|| s[s.length-1] == '/')) return 'Knocked Off, Dust Yourself Down.';
    else {
      for (var i = 0; i < s.length; i++) {
        if (i == x && (s[i] == '\\' || s[i+1] == '\\' || s[i+2] == '\\')) return 'Crash, Bang, Ouch!';
        else if (i == x && (s[i] == '/' || s[i+1] == '/')) return 'Knocked Off, Dust Yourself Down.';
      }
    }
    return 'Plain Sailing!';
}
