// Kata: https://www.codewars.com/kata/57cc847e58a06b1492000264

/* Description:  Given an array of numbers, return a string made up of
 four parts:

a) a four character 'word', made up of the characters derived from the first
two and last two numbers in the array. order should be as read left to right
(first, second, second last, last),

b) the same as above, post sorting the array into ascending order,

c) the same as above, post sorting the array into descending order,

d) the same as above, post converting the array into ASCII characters and
sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen: '-'

example format of solution: 'asdf-tyui-ujng-wedg' */

// Solution:
function sortTransform(a){
  var newArr = [], sol = [];

function drag(){
    newArr.push(String.fromCharCode(a[0], a[1], a[a.length-2], a[a.length-1]));
    sol.push(newArr);
    newArr = [];
  };
  function drag2(){
    newArr.push(a[0], a[1], a[a.length-2], a[a.length-1]);
    sol.push(newArr.join(''));
    newArr = [];
  };

  drag();
  a = a.sort((a,b)=>a-b);
  drag();
  a = a.sort((a,b)=>b-a);
  drag();
  a = a.map(x=>x=String.fromCharCode(x)).sort();
  drag2();

 return sol.join('-');

}
