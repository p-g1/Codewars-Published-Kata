Test.describe("Basic tests",_=>{
Test.assertEquals(onePunch('Beard Jeans Hairbrush Knuckleduster Sand'), 'Brd Hirbrush Jns Knuckldustr Snd');
Test.assertEquals(onePunch('Sock Beard Vest Lady Sage'), 'Brd Ldy Sg Sock Vst');
Test.assertEquals(onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes'), 'Brd Fc-Kicking-Shos Gun Prchut Sck');
Test.assertEquals(onePunch('Snot Snow Soda Tank Beard'), 'Brd Snot Snow Sod Tnk');
Test.assertEquals(onePunch(''), 'Broken!');
Test.assertEquals(onePunch(3456), 'Broken!');
Test.assertEquals(onePunch(['one', 'two', 'three']), 'Broken!');
Test.assertEquals(onePunch([]), 'Broken!');
})

Test.describe("Random tests",_=>{
function randint(a, b){
  return Math.floor(Math.random()*(b-a+1)+a);
}


function solonePunch(items){if (items !== items.toString() || items.length < 1) return 'Broken!'; return items.split(" ").sort().join(" ").replace(/[aeAE]/g, "" );}


var base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (var i = 0; i < 10; i++) {
  var string = [], len = randint(1, 10);
  for (var j = 0; j < len; j++) {
      var temp = [], lentemp = randint(1, 20);
      for (var x = 0; x < lentemp; x++) {
        temp.push(base[randint(0, base.length-1)]);
      }
      string.push(temp.join(''));
    }
  }
  string = string.join('');
  Test.it(`testing for ${string}`,function(){
  Test.assertEquals(onePunch(string), solonePunch(string), 'You\'ve been kicked in the face!');
  })
  });
