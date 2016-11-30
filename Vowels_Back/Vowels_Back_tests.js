Test.describe("Basic tests",_=>{
Test.assertSimilar(vowelBack("testcase"), "tabtbvba");
Test.assertSimilar(vowelBack("codewars"), "bnaafvab");
Test.assertSimilar(vowelBack("exampletesthere"), "agvvyuatabtqaaa");
Test.assertSimilar(vowelBack("returnofthespacecamel"), "aatpawnftqabyvbabvvau");
Test.assertSimilar(vowelBack("bringonthebootcamp"), "kaiwpnwtqaknntbvvy");
Test.assertSimilar(vowelBack("weneedanofficedog"), "fawaaavwnffibaanp");
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myvowelBack(s){
  s = s.split('');

  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt(0);
    if (s[i] == 97 || s[i] == 117) {
      if (s[i]-5 < 97) s[i] = s[i]+21;
      else if (s[i]-5 > 97) s[i] = s[i]-5;
      }
    else if (s[i] == 99 ||s[i]== 111) s[i] = s[i]-1;
    else if (s[i] == 118 ||s[i]== 116 ||s[i]==102 || s[i] == 105) s[i] = s[i];
    else if (s[i]==101) s[i] = s[i]-4;
    else if (s[i]==100) s[i] = s[i]-3;
    else if (s[i]+9 <= 122) s[i] = s[i]+9;
    else if (s[i]+9>122) s[i] = 96 + ((s[i]+9)-122)
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
  Test.assertSimilar(vowelBack(s),myvowelBack(s),"It should work for random inputs too");
  })
 }
})
