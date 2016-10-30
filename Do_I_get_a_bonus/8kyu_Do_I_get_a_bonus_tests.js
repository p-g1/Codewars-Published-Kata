Test.describe("Basic tests",_=>{
Test.assertEquals(bonusTime(10000, true), '£100000');
Test.assertEquals(bonusTime(25000, true), '£250000');
Test.assertEquals(bonusTime(10000, false), '£10000');
Test.assertEquals(bonusTime(60000, false), '£60000');
Test.assertEquals(bonusTime(2, true), '£20');
Test.assertEquals(bonusTime(78, false), '£78');
Test.assertEquals(bonusTime(67890, true), '£678900');
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=(s, b)=>"£"+s*(b ? 10 : 1);

for (var i=0;i<40;i++){
  var s=randint(1,Math.pow(10,randint(2,4)))*100, b=[false, true][randint(0,1)];
  Test.it(`Testing for ${s} and ${b}`,_=>{
  Test.assertEquals(bonusTime(s,b),sol(s,b),"It should work for random inputs too");
  })
}
})
