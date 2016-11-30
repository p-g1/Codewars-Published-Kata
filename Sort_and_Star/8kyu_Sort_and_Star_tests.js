Test.describe("Basic tests",_=>{
Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
Test.assertEquals(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t');
Test.assertEquals(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e');
Test.assertEquals(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s');
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mytwoSort(s) {
  s = s.sort();
  return s[0].split('').join('***');
}
var names=["Bitcoin", "LiteCoin", "Ripple", "Dash", "Lisk", "DarkCoin", "Monero", "Ethereum", "Classic", "Mine", "ProofOfWork", "ProofOfStake", "21inc", "Steem", "Dogecoin", "Waves", "Factom", "MadeSafeCoin", "BTC"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);

  Test.it(`Testing for ${s}`,_=>{
  Test.assertEquals(twoSort(s),mytwoSort(s),"It should work for random inputs too");
  })
}
})
