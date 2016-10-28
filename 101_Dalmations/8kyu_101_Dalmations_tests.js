Test.describe("Basic tests",_=>{
Test.assertEquals(howManyDalmatians(26), "More than a handful!");
Test.assertEquals(howManyDalmatians(8), "Hardly any");
Test.assertEquals(howManyDalmatians(14), "More than a handful!");
Test.assertEquals(howManyDalmatians(80), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(100), "Woah that's a lot of dogs!");
Test.assertEquals(howManyDalmatians(101), "101 DALMATIANS!!!");
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=n=>["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"][[true, n>10, n>50, n>=101].join("").match(/true/g).length-1];

for (var i=0;i<40;i++){
  var n=randint(1,101);
  Test.it(`Testing for ${n}`,_=>{
  Test.assertEquals(howManyDalmatians(n),sol(n),"It should work for random inputs too");
  })
}
})
