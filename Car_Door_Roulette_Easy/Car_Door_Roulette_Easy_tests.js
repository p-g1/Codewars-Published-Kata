Test.describe("Basic tests",_=>{
Test.assertEquals(carD('EvH/KNikBiyxfeyK/miCMj', 16), 'Knocked Off, Dust Yourself Down.');
Test.assertEquals(carD('tGDlrC\\RiJ', 5), 'Crash, Bang, Ouch!');
Test.assertEquals(carD('ORlZFrxLMXBefRdgrTNEKmmYpd', 18), 'Plain Sailing!');
Test.assertEquals(carD('LIlh\GlRpWgeuWyaQWe', 1), 'Plain Sailing!');
Test.assertEquals(carD('iNbUdGX\\XJS\\RCNxP', 5 ), 'Crash, Bang, Ouch!');
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mycarD(s, x){
  var s = s.split('');
    if (x == s.length-1 && s[s.length-1] == '\\') return 'Crash, Bang, Ouch!';
    else if (x == s.length-2 && (s[s.length-2] == '/'|| s[s.length-1] == '/')) return 'Knocked Off, Dust Yourself Down.';
    else {
      for (var i = 0; i < s.length; i++) {
        if (i == x && (s[i] == '\\' || s[i+1] == '\\' || s[i+2] == '\\')) return 'Crash, Bang, Ouch!';
        else if (i == x && (s[i] == '/' || s[i+1] == '/')) return 'Knocked Off, Dust Yourself Down.';
      }
    }
    return 'Plain Sailing!';
}
var names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "/", "\\", "/", "\\"];

for (var i=0;i<100;i++){
  var s=[],b=[],len=randint(1,30);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
  s=s.join('');
  var x = randint(0,s.length-1);
  Test.it(`Testing for ${s, x}`,_=>{
  Test.assertEquals(carD(s, x),mycarD(s, x),"It should work for random inputs too");
  })
}
})
