Test.describe("Basic tests",_=>{
Test.assertEquals(price(19.95, 'Barely used', 3), '$26.55');
Test.assertEquals(price(27.76, 'Seen a few high kicks', 15), '$788.99');
Test.assertEquals(price(13.26, 'Blood stained', 25), '$9356.80');
Test.assertEquals(price(44.11, 'Heavily soiled', 7), '$753.66');
Test.assertEquals(price(0, 'Heavily soiled', 7), '$0.00');
});

Test.describe("Bigger Numbers",_=>{
Test.assertEquals(price(101.01, 'Barely used', 67), '$59934.14');
Test.assertEquals(price(6627.11, 'Seen a few high kicks', 40), '$49856834.35');
Test.assertEquals(price(500, 'Blood stained', 55), '$924388174.94');
Test.assertEquals(price(66000, 'Heavily soiled', 10), '$3805892.58');
});

Test.describe("Wrong input tests",_=>{
Test.assertEquals(price('pants', 6, 7), 'Chuck is bottomless!');
Test.assertEquals(price(74.17, 'incorrect', 7), 'Chuck is bottomless!');
Test.assertEquals(price([], '', 7), 'Chuck is bottomless!');
Test.assertEquals(price(44.11, [], 'seven'), 'Chuck is bottomless!');
Test.assertEquals(price(69.69, 'Barly used', 69), 'Chuck is bottomless!');
});

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
function myprice(start, soil, age) {
  var ans = 0, count = 0;

  if (start != Number(start) || age != Number(age) || soil === Number(soil) || soil === [] || start === []) return 'Chuck is bottomless!';
  if (soil != 'Barely used' && soil != 'Seen a few high kicks' && soil != 'Blood stained' && soil != 'Heavily soiled') return 'Chuck is bottomless!';

  if (soil === 'Barely used') soil = 10;
  else if (soil === 'Seen a few high kicks') soil = 25;
  else if (soil === 'Blood stained') soil = 30;
  else if (soil === 'Heavily soiled') soil = 50;

  while (count < age) start = (start*(1+(soil/100))), count++;
  return '$'+ start.toFixed(2);
}
var names=['Barely used', 'Seen a few high kicks', 'Blood stained', 'Heavily soiled'];

for (var i=0;i<100;i++){
  var start, soil, age;


  start = randint(1, 100);
  soil = names[randint(0, names.length)];
  age = randint(0, 30);


  Test.it(`Testing for ${start}, ${soil} and ${age}`,_=>{
  Test.assertSimilar(price(start, soil, age),myprice(start, soil, age),"It should work for random inputs too");
  })
}
})
