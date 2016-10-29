Test.describe("Basic tests",_=>{
Test.assertEquals(correctTail("Fox", "x"), true);
Test.assertEquals(correctTail("Rhino", "o"), true);
Test.assertEquals(correctTail("Meerkat", "t"), true);
Test.assertEquals(correctTail("Emu", "t"), false);
Test.assertEquals(correctTail("Badger", "s"), false);
Test.assertEquals(correctTail("Giraffe", "d"), false);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const solTail=(b,t)=>b.slice(-1)[0]==t;
var base="abcdefghijklmnopqrstuvwxyz";

for (var i=0;i<40;i++){
  var b=[], len=randint(1,35);
  for (var qu=0;qu<len;qu++){
    b.push(base[randint(0,base.length-1)]);
  }
  b=[b[0].toUpperCase()].concat(b.slice(1)).join("");
  var t=randint(0,1) ? b[b.length-1] : base[randint(0,base.length-1)];
  Test.it(`Testing for '${b}' and '${t}'`,_=>{
  Test.assertEquals(correctTail(b,t),solTail(b,t),"It should work for random inputs too");
  })
}
})
