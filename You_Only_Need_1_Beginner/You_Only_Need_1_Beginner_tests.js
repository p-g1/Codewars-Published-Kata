Test.describe("Basic tests",_=>{
Test.assertEquals(check([66, 101], 66), true);
Test.assertEquals(check([78, 117, 110, 99, 104, 117, 107, 115], 8), false);
Test.assertEquals(check([101, 45, 75, 105, 99, 107], 107), true);
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
Test.assertEquals(check([66, ,'codewars', 11, 'alex loves pushups'], 'alex loves pushups'), true);
Test.assertEquals(check(['come', 'on', 110, '2500', 10, '!', 7, 15], 'Come'), false);
Test.assertEquals(check(['when\'s', 'the', 'next', 'Katathon?', 9, 7], 'Katathon?'), true);
Test.assertEquals(check([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115], 45), false);
Test.assertEquals(check(['anyone', 'want', 'to', 'hire', 'me?'], 'me?'), true);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mycheck(a,x){return a.some(z=>z==x)};
var nums=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i=0;i<40;i++){
var limit=(nums[randint(0,nums.length-1)]);
  var a=[],len=randint(1,20);
  var x = Number(nums[randint(0,nums.length-1)]);
  for (var k=0;k<len;k++) {
  a.push(nums[randint(0,nums.length-1)]);
  }

  Test.it(`Testing for ${a, x}`,_=>{
  Test.assertEquals(check(a, x),mycheck(a, x),"It should work for random inputs too");
  })
}
})
