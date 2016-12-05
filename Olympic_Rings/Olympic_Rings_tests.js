Test.describe("Basic tests",_=>{
Test.assertEquals(olympicRing('wHjMudLwtoPGocnJ'), 'Bronze!');
Test.assertEquals(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!');
Test.assertEquals(olympicRing('JKniLfLW'), 'Not even a medal!');
Test.assertEquals(olympicRing('EWlZlDFsEIBufsalqof'), 'Silver!');
Test.assertEquals(olympicRing('IMBAWejlGRTDWetPS'), 'Gold!');
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myolympicRing(s){
 var total = 0, newArr = [], loops = {"a":1,"b":1,"c":0,"d":1,"e":1,"f":0,"g":1,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":1,"p":1,"q":1,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0,
 "A":1,"B":2,"C":0,"D":1,"E":0,"F":0,"G":0,"H":0,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":1,"P":1,"Q":1,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0};
s =s.split('');
for (var i = 0; i < s.length; i++) {
    var a=s[i];
    total+=loops[a];
    newArr.push(total);
    total = 0;
  }
  newArr = newArr.reduce((a,b)=>a+b);

var x = Math.floor(newArr/2);
if (x == 1 || x < 1) return 'Not even a medal!';
else if (x == 2) return 'Bronze!';
else if (x == 3) return 'Silver!';
else if (x > 3) return 'Gold!';
}
var names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,30);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
 s=s.join('');
  Test.it(`Testing for ${s}`,_=>{
  Test.assertEquals(olympicRing(s),myolympicRing(s),"It should work for random inputs too");
  })
}
})
