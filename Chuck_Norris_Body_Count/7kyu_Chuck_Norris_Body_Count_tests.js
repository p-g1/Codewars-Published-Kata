Test.describe("Basic tests",_=>{
Test.assertEquals(bodyCount('A6C2E5Z9A4.-F%8.08.'), true);
Test.assertEquals(bodyCount('PP P6A6T5F5S3.-Z%1.11.hgr'), true);
Test.assertEquals(bodyCount('A6A1E3A8M2.-Q%8.88.'), true);
Test.assertEquals(bodyCount('d G8H1E2O9N3.-W%8.56. f'), true);
Test.assertEquals(bodyCount('B4A1D1I8B4.-E%8.76.'), true);
Test.assertEquals(bodyCount('ffr65A C8K4D9U7V5.-Y%8.00.'), true);
Test.assertEquals(bodyCount(' 76     B2L4D0A8C6.-T%8.90.       lkd'), true);
Test.assertEquals(bodyCount('B2L4D0A8C6.-T%8.90'), false);
Test.assertEquals(bodyCount('B2L4D0AFC6.-T%8.90.'), false);
Test.assertEquals(bodyCount('B4A1D1I8B4'), false);
Test.assertEquals(bodyCount('B4A6666...'), false);
Test.assertEquals(bodyCount('B4A1D1I000.-E%0.00.)'), false);
Test.assertEquals(bodyCount('.-E%8.76.'), false);
Test.assertEquals(bodyCount('B4A1t6I7.-E%8.76.'), false);
Test.assertEquals(bodyCount('b4A1D1I8B4.-E%8.76.'), false);

});

Test.describe("Random tests coming soon",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mybodyCount(code){
  return code.match(/[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}.-[A-Z]{1}%[0-9]{1}.[0-9]{2}./) ?  true : false;}

var names=["A","B","C","D","E","F","G","H","I","J","K","L","M","0","1","2","3","4","5","6","7","8","9"];
var int = ['.', '-', '%', '.', '-'];
var mid = ['A', 'B', 'C', '%', '%', '0', '1', '2', '3'];
var num = ['.', '4', '.', '.', '0', '1', '2', '3'];
for (var i=0;i<100;i++){
  var code=[],len=8, len2 = 2, len3 = 3;
  for (var k=0;k<len;k++) code.push(names[randint(0,names.length-1)]);
  for (var k=0;k<len2;k++) code.push(int[randint(0,names.length-1)]);
  for (var k=0;k<len3;k++) code.push(mid[randint(0,names.length-1)]);
  for (var k=0;k<len3;k++) code.push(num[randint(0,names.length-1)]);
code=code.join('');

  Test.it(`Testing for ${code}`,_=>{
  Test.assertSimilar(bodyCount(code),mybodyCount(code),"It should work for random inputs too");
  })
}
})
