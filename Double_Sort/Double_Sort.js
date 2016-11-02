// Kata: https://www.codewars.com/kata/57cc79ec484cf991c900018d

/* Description:  Simple enough this one - you will be given an array.
The values in the array will either be numbers or strings, or a mix of both.
 You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in
ascending order, followed by the strings sorted in alphabetic order. The values
must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the
 other strings.*/

 // Solution:
 function dbSort(a){
  var newArr = [], newArr2 = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] === Number(a[i])) newArr.push(a[i]);
    else if (a[i] === String(a[i])) newArr2.push(a[i]);
  }
  newArr = newArr.sort((a,b)=>a-b);
  newArr2 = newArr2.sort();

  return newArr.concat(newArr2);
}
