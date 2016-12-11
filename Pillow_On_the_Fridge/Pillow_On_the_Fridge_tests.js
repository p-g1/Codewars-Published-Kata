Test.describe("Basic tests",_=>{
Test.assertEquals(pillow(['EvH/KNikBiyxfeyK/miCMj', 'I/HwjnHlFLlahMOKNadps']), false);
Test.assertEquals(pillow(['\\DjQ\\[zv]SpG]Z/[Qm\\eLL', 'amwZArsaGRmibriXBgTRZp']), false);
Test.assertEquals(pillow([ 'n', 'B' ]), true);
Test.assertEquals(pillow(['yF[CeAAiNihWEmKxJc/NRMVn', 'rMeIa\\KAfbjuLiTnAQxNw[XB']), true);
Test.assertEquals(pillow(['inECnBMAA/u', 'ABAaIUOUx/M']), true);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mypillow(s){
  var s1 = s[0].split(''), s2 = s[1].split('');
  for (var i = 0; i < s[0].length; i++) if (s1[i] == 'n' && s2[i] == 'B') return true;
  return false;
}

var names=["n","o","p","q","r","s","t","u","v","w","x","y","z","B"];

for (var i=0;i<100;i++){
  var s=[],b=[],a=[],len=randint(1,30);
  while(s.length < 1){
  for (var k=0;k<len;k++) {
    a.push(names[randint(0,names.length-1)]);
    b.push(names[randint(0,names.length-1)]);
    }
  s.push(a.join(''), b.join(''));
  }

  Test.it(`Testing for ${s}`,_=>{
  Test.assertEquals(pillow(s),mypillow(s),"It should work for random inputs too");
  })
}
})
