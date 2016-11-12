Test.describe("Basic tests",_=>{
Test.assertSimilar(popShift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps"), ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]);
Test.assertSimilar(popShift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones"), ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]);
Test.assertSimilar(popShift("exampletesthere"), ["erehtse","example","t"]);
Test.assertSimilar(popShift("letstalkaboutjavascriptthebestlanguage"), ["egaugnaltsebehttpir","letstalkaboutjavasc",""]);
Test.assertSimilar(popShift("iwanttotraveltheworldwritingcodeoneday"), ["yadenoedocgnitirwdl","iwanttotravelthewor",""]);
Test.assertSimilar(popShift("letsallgoonholidaysomewhereverycold"), ["dlocyreverehwemos","letsallgoonholida","y"]);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const mypopShift=s=>[s.slice(Math.ceil(s.length/2)).split("").reverse().join(""),s.slice(0,Math.floor(s.length/2)),s.slice(Math.floor(s.length/2),Math.ceil(s.length/2))];
var names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
  s=s.join("");
  Test.it(`Testing for ${s}`,_=>{
  Test.assertSimilar(popShift(s),mypopShift(s),"It should work for random inputs too");
  })
 }
})
