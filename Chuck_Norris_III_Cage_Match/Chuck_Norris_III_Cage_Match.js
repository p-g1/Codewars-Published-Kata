// Challenge: https://www.codewars.com/kata/57061b6fcb7293901a000ac7

/* Description:  <img src=http://www.myteespot.com/images/Images_d/d_7531.jpg>

It's Friday night, and Chuck is bored. He's already run 1,000 miles, stopping
only to eat a family sized bag of Heatwave Doritos and a large fistful of M&Ms.
 He just can't stop thinking about kicking something!

There is only one thing for it, Chuck heads down to his local MMA gym and
immediately challenges every fighter there to get in the cage and try and take
him down... AT THE SAME TIME!

You are provided an array of strings that represent the cage and Chuck's
opponents. Your task, in traditional Chuck style, is to take their heads off!!
Throw punches, kicks, headbutts (or more likely - regex or iteration...) but
whatever you do, remove their heads. Return the same array of strings, but with
the heads ('O') removed and replaced with a space (' ').

If the provided array is empty, or is an empty string, return 'Gym is empty'.
If you are given an array of numbers, return 'This isn't the gym!!'.

FIGHT!!

*Original design of this kata was a much more beautiful thing - the test cases
illustrate the idea, and the intended output. I am unable to make the actual
output go over multiple lines so for now at least you will have to imagine the
beauty!**/

// Solution:
function headSmash(a) {

  if (a == [] || a == '') {
    return 'Gym is empty';
    }
   else if (a == Number(a)) {
    return 'This isn\'t the gym!!';
    }

  else {
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].replace(/O/g, ' ');
    }
    return a;
    }
}
