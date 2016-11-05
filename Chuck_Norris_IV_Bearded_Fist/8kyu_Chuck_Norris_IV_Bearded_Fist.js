// Kata: https://www.codewars.com/kata/57066708cb7293901a0013a1

/* Description:  <img
src = https://teamfisticuffs.files.wordpress.com/2011/09/beardfist.jpg>

It has long been rumoured that behind Chuck's beard is not a chin, but
another fist!

When shaving, Chuck accidentally punched himself in the face. He is the only
man that could take that punch without dying, but that doesn't mean it didn't
sting! Chuck can't remember a thing - he needs your help!!

Hidden within the provided array of arrays are numbers that represent the
letters of the words for some of Chuck's favourite things! Your job is to
translate them, and return the words so that Chuck can get back to the business
 of punching and kicking things.*/

 // Solution:
 function fistBeard(arr) {
 var newArr = [];
 var count = 0;

 for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
   newArr.push(String.fromCharCode(arr[i][j]));
   }
   count++;
 }
 return newArr.join('');
}
