Test.describe("Basic tests",_=>{
Test.assertSimilar(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
Test.assertSimilar(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
Test.assertSimilar(numObj([118,103,110,109,104,106]),[{"118":"v"},{"103":"g"},{"110":"n"},{"109":"m"},{"104":"h"},{"106":"j"}]);
Test.assertSimilar(numObj([107,99,110,107,118,106,112,102]),[{"107":"k"},{"99":"c"},{"110":"n"},{"107":"k"},{"118":"v"},{"106":"j"},{"112":"p"},{"102":"f"}]);
Test.assertSimilar(numObj([100,100,116,105,117,121 ]),[{"100":"d"},{"100":"d"},{"116":"t"},{"105":"i"},{"117":"u"},{"121":"y"}]);
});

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function mynumObj(s){
var sol = [];

  for (var i = 0; i < s.length; i++) {

    var myObj = new Object;
    var a = s[i];
    var b = String.fromCharCode(s[i]);
    myObj[a] = b;
    sol.push(myObj);
    }
  return sol;
}

var nums=[97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(nums[randint(0,nums.length-1)]);

  Test.it(`Testing for ${s}`,_=>{
  Test.assertSimilar(numObj(s), mynumObj(s),"It should work for random inputs too");
  })
 }
})
