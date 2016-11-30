Test.describe("Basic tests",_=>{
Test.assertSimilar(moveTen("testcase"), "docdmkco");
Test.assertSimilar(moveTen("codewars"), "mynogkbc");
Test.assertSimilar(moveTen("exampletesthere"), "ohkwzvodocdrobo");
Test.assertSimilar(moveTen("returnofthespacecamel"), "bodebxypdroczkmomkwov");
Test.assertSimilar(moveTen("bringonthebootcamp"), "lbsxqyxdrolyydmkwz");
Test.assertSimilar(moveTen("weneedanofficedog"), "goxoonkxyppsmonyq");
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mymoveTen(s){
  s = s.split('');

  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt(0);
    if (s[i]+10 <= 122) s[i] = s[i]+10;
    else if (s[i]+10>122) s[i] = 96 + ((s[i]+10)-122)
    s[i] = String.fromCharCode(s[i]);
    }

  return s.join('');
}
var names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
  s=s.join("");
  Test.it(`Testing for ${s}`,_=>{
  Test.assertSimilar(moveTen(s),mymoveTen(s),"It should work for random inputs too");
  })
 }
})
