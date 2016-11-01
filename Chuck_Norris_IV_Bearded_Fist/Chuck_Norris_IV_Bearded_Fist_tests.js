Test.describe("Basic tests",_=>{
Test.assertEquals(fistBeard([[66, 101], [97, 114, 100], [101, 100, 45, 70, 105, 115, 116]]), 'Bearded-Fist');
Test.assertEquals(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]), 'Nunchuks');
Test.assertEquals(fistBeard([[70, 97, 99], [101, 45, 75, 105, 99, 107]]), 'Face-Kick');
Test.assertEquals(fistBeard([[80], [117, 115, 104], [45, 85, 112, 115]]), 'Push-Ups');
Test.assertEquals(fistBeard([[82, 111, 117, 110, 100, 104, 111, 117], [115, 101], [45, 75, 105, 99, 107]]), 'Roundhouse-Kick');
Test.assertEquals(fistBeard([[83], [109, 97], [115, 104]]), 'Smash');
})

Test.describe("Random tests",_=>{
function randint(a, b){
  return Math.floor(Math.random()*(b-a+1)+a);
}

function solfistBeard(arr) {
 var newArr = [];
 var count = 0;

 for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
   newArr.push(String.fromCharCode(arr[i][j]));
   }
   count++;
 }
 return newArr.join('');
}

var base = '0123456789';

for (var i = 0; i < 10; i++) {
  var string = [], len = randint(1, 10);
  for (var j = 0; j < len; j++) {
      var temp = [], lentemp = randint(1, 20);
      for (var x = 0; x < lentemp; x++) {
        temp.push(randint(0, Math.pow(10,randint(1,8))));
      }
      string.push(temp);
    }
  }
  Test.it(`testing for [${string.map(a=>["[",a.join(", "),"]"].join(""))}]`,function(){
  Test.assertEquals(fistBeard(string), solfistBeard(string), 'Stroke Chuck\'s Face!');
  })

});
