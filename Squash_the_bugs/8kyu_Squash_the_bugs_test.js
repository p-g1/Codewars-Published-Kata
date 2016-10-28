Test.describe("Basic tests",_=>{
Test.assertEquals(findLongest("The quick white fox jumped around the massive dog"), 7);
Test.assertEquals(findLongest("Take me to tinseltown with you"), 10);
Test.assertEquals(findLongest("Sausage chops"), 7);
Test.assertEquals(findLongest("Wind your body and wiggle your belly"), 6);
Test.assertEquals(findLongest("Lets all go on holiday"), 7);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=s=>Math.max.apply(this, s.split(" ").map(a=>a.length));
var names=["Arsene", "Lupin", "III", "Daisuke", "Jigen", "Goemon", "Ishikawa", "Fujiko", "Mine", "Rebecca", "Rossellini", "Koichi", "Zenigata", "Justin", "Nix", "Person", "Leonardo", "Da", "Vinci"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
  s=s.join(" ");
  Test.it(`Testing for ${s}`,_=>{
  Test.assertEquals(findLongest(s),sol(s),"It should work for random inputs too");
  })
}
})
