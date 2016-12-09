Test.describe("Basic tests",_=>{
Test.assertEquals(carD(['EvH/KNikBiyxfeyK/miCMj', 'I/HwjnHlFLlahMOKNadps'], 0), 'Dammit!');
Test.assertEquals(carD(['\\DjQ\\[zv]SpG]Z/[Qm\\eLL', 'amwZArsaGRmibriXBgTRZp'], 8 ), 'Free Lambo on Left!');
Test.assertEquals(carD([ 'I', '\\' ], 0), 'Right Smash!');
Test.assertEquals(carD(['yF[CeAAiNihWEmKxJc/NRMVV', 'rMeIa\\KAfbjuLiTnAQxNw[Xz'], 20), 'Free Lambo on Left!');
Test.assertEquals(carD(['iNECnBMAA/u', 'AoAaIUOUx/M'], 9), 'Super Smash!');
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mycarD(s, x){

  var s1 = s[0].split('');
  var s2 = s[1].split('');

 for (var i = 0; i < s1.length; i++) {
   if (s1[i] == '\\' && (s2[i] == '\\' || s2[i] == '/')) return 'Super Smash!';
   else if (s1[i] == '/' && (s2[i] == '\\' || s2[i] == '/')) return 'Super Smash!';
   }

  if (s1.some(x=>x=='[')) return 'Free Lambo on Left!';
  if (s2.some(x=>x==']')) return 'Free Lambo on Right!';

    if (x == s1.length-1 && s1[s1.length-1] == '\\') return 'Crash, Bang, Ouch!';
    else if (x == s2.length-1 && s2[s2.length-1] == '\\') return 'Right Smash!';
    else if (x == s1.length-2 && (s1[s1.length-2] == '/'|| s1[s1.length-1] == '/')) return 'Knocked Off, Dust Yourself Down.';
    else if (x == s2.length-2 && (s2[s2.length-2] == '/'|| s2[s2.length-1] == '/')) return 'Dammit!';

    else {
      for (var i = 0; i < s1.length; i++) {
        if (i == x && (s1[i] == '\\' || s1[i+1] == '\\' || s1[i+2] == '\\')) return 'Crash, Bang, Ouch!';
        else if (i == x && (s2[i] == '\\' || s2[i+1] == '\\' || s2[i+2] == '\\')) return 'Right Smash!';
        else if (i == x && (s1[i] == '/' || s1[i+1] == '/')) return 'Knocked Off, Dust Yourself Down.';
        else if (i == x && (s2[i] == '/' || s2[i+1] == '/')) return 'Dammit!';
      }
    }
    return 'Plain Sailing!';
}

var names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "[", "]",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "/", "\\", "/", "\\"];

for (var i=0;i<50;i++){
  var s=[],b=[],a=[],len=randint(1,25);
  while(s.length < 1){
  for (var k=0;k<len;k++) {
    a.push(names[randint(0,names.length-1)]);
    b.push(names[randint(0,names.length-1)]);
    }
  s.push(a.join(''), b.join(''));
  }
  var x = randint(0,s[0].length-1);
  Test.it(`Testing for ${s, x}`,_=>{
  Test.assertEquals(carD(s, x),mycarD(s, x),"It should work for random inputs too");
  })
}
})
