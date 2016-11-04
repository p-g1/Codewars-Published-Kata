Test.describe("Basic tests",_=>{
Test.assertEquals(smallEnough([66, 101], 200), true);
Test.assertEquals(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
Test.assertEquals(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
Test.assertEquals(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
Test.assertEquals(smallEnough([1,1, 1, 1, 1, 2], 1), false);
Test.assertEquals(smallEnough([78, 33, 22, 44, 88, 9, 6], 87), false);
Test.assertEquals(smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10), true);
Test.assertEquals(smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12), true);
})

Test.describe("For loop test",_=>{
Test.assertEquals(smallEnough.toString().indexOf('for'),-1, 'No loops please')
})

Test.describe("While loop test",_=>{
Test.assertEquals(smallEnough.toString().indexOf('while'),-1, 'No loops please')
})

Test.describe("Code length test",_=>{
Test.assertEquals(smallEnough.toString().length<=50, true, (smallEnough.toString().length-50) + ' characters too long!')
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mysmallEnough(a, limit){

 function small(element, index, array) {
  return element <= limit;
 }
return a.every(small);
}
var nums=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i=0;i<40;i++){
var limit=(nums[randint(0,nums.length-1)]);
  var a=[],len=randint(1,20);
  for (var k=0;k<len;k++) a.push(nums[randint(0,nums.length-1)]);

  Test.it(`Testing for ${a, limit}`,_=>{
  Test.assertEquals(smallEnough(a, limit),mysmallEnough(a, limit),"It should work for random inputs too");
  })
}
})
