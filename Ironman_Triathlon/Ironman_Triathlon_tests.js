Test.describe("Basic tests",_=>{
Test.assertSimilar(iTri(36),{'Bike':'104.60 to go!'});
Test.assertSimilar(iTri(103),{'Bike':'37.60 to go!'});
Test.assertSimilar(iTri(0),'Starting Line... Good Luck!');
Test.assertSimilar(iTri(2),{'Swim':'138.60 to go!'});
Test.assertSimilar(iTri(151),"You're done! Stop running!");
});

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myiTri(s){
  if (s == 0) return 'Starting Line... Good Luck!';
  else if (s > 0 && s <= 2.4) {
    var myObj = new Object;
    var a = 'Swim';
    var b = (140.6-s).toFixed(2) + ' to go!';
    myObj[a] = b;
    return myObj;
    }
  else if (s > 2.4 && s <= 114.4) {
    var myObj = new Object;
    var a = 'Bike';
    var b = (140.6-s).toFixed(2) + ' to go!';
    myObj[a] = b;
    return myObj;
    }
  else if (s > 114.4 && s < 130.6) {
    var myObj = new Object;
    var a = 'Run';
    var b = (140.6-s).toFixed(2) + ' to go!';
    myObj[a] = b;
    return myObj;
    }
  else if (s > 130.6 && s <= 140.6) {
    var myObj = new Object;
    var a = 'Run';
    var b = 'Nearly there!';
    myObj[a] = b;
    return myObj;
    }
  else if (s > 140.6) return "You're done! Stop running!";
}
for (var i=0;i<40;i++){
  var s=randint(0,170);

  Test.it(`Testing for ${s}`,_=>{
  Test.assertSimilar(iTri(s),myiTri(s),"It should work for random inputs too");
  })
 }
})
