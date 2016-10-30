Test.describe("Basic tests",_=>{
Test.assertEquals(chuckPushUps('01111101000 "Hi" 01111101001 "Chuck look at you go!" 01111101010 "Phwoar" 01111101100 "How was work?" 01111101101'), 1005);
Test.assertEquals(chuckPushUps('010011100010000 "Chuck!" 010011100010001 "Stop that!" 010011100010010 "New vest?" 010011100010011 010011100010100'), 10004);
Test.assertEquals(chuckPushUps('0100111101111 "Have you made dinner?" 0100111110000 "More push Ups?" 0100111110001 0100111110010 "I\'m leaving you!" 0100111110011 0100111110100 "Stop!!!!"'), 2548);
Test.assertEquals(chuckPushUps('01101010000101 "Oi" "Come Here!" 01101010000110 "Idiot!" 01101010000101 "You have tiny arms..." 01101010000100 01101010000011 "Fine I\'ll go to bed on my own!"'), 6790);
Test.assertEquals(chuckPushUps(''), 'FAIL!!');
Test.assertEquals(chuckPushUps('1ee1gf00t10h1011tr00'), 3244);
Test.assertEquals(chuckPushUps('1000 1001 1010 1011 110'), 11);
Test.assertEquals(chuckPushUps('List of jobs: clean house, stop being such a badass, cook dinner, buy some sleeves for that stupid denim vest!'), 'CHUCK SMASH!!');
Test.assertEquals(chuckPushUps('01101010000101 01101010000110 01101010000100 01101010000011'), 6790);
Test.assertEquals(chuckPushUps(['not', 'a', 'string']), "FAIL!!");
Test.assertEquals(chuckPushUps(100), "FAIL!!");
})

Test.describe("Random tests",_=>{
function randint(a, b){
  return Math.floor(Math.random()*(b-a+1)+a);
}
function solPushUps(string) {

if (string !==string.toString() || string.length < 1) {
  return 'FAIL!!';
  }

  string = string.replace(/[^10 ]/g, '').split(' ');
  var newArr = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i].length > 0) {
  		newArr.push(parseInt(string[i], 2));
  	}
  }
  newArr.sort(function(a, b) {
  	return a-b;
  });

  if (newArr.length === 0) {
    return "CHUCK SMASH!!";
    }

  return newArr[newArr.length-1];
  }
var base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (var i = 0; i < 40; i++) {
  var string = [], len = randint(5, 20);
  for (var j = 0; j < len; j++) {
    if (randint(0, 1)) string.push(randint(0, Math.pow(2, randint(1, 4))).toString(2));
    else {
      var temp = [], lentemp = randint(1, 20);
      for (var x = 0; x < lentemp; x++) {
        temp.push(base[randint(0, base.length-1)]);
      }
      string.push(temp.join(''));
    }
  }
  string = string.join('');
  Test.it(`testing for ${string}`,function(){
  Test.assertEquals(chuckPushUps(string), solPushUps(string), 'Chuck is winding up a left!');
  })
}
})
