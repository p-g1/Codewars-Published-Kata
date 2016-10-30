// Challenge: https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

/* Description: You're at the zoo... all the meerkats look weird. Something has
gone terribly wrong - someone has gone and switched their heads and tails
around!

Save the animals by switching them back. You will be given an array which will
have three values (tail, body, head). It is your job to re-arrange the array so
that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you
have to change the element positions with the same exact logics - simples!*/

// Solution:

function fixTheMeerkat(arr) {
  var newArr = [];
  for (var i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
