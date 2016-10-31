function display(array) {
  var s = ''
  for (var i in array) {
    s += '<div>'+array[i].replace(/ /g,'&nbsp;').replace(/_&nbsp;_/g,'_<span style="color:red;">:</span>_')+'</div>'
  }
  console.log(s)
  return array
}
Test.describe("Basic tests",_=>{
Test.assertSimilar(display(headSmash(
[
'*****************************************',
'**  _O_   *   _O_   *   _O_   *   _O_  **',
'** /(.)J  *  C(.)J  *  /(.)J  *  C(.)J **',
'** _| |_  *  _| |_  *  _( )_  *  _( )_ *'])),

[
'*****************************************',
'**  _ _   *   _ _   *   _ _   *   _ _  **',
'** /(.)J  *  C(.)J  *  /(.)J  *  C(.)J **',
'** _| |_  *  _| |_  *  _( )_  *  _( )_ *']);

Test.assertSimilar(display(headSmash(
[
'***  _O_   **   _O_   **   _O_   **   _O_  ***',
'*** /(.)J  **  /(.)J  **  C(.)J  **  C(.)J ***',
'*** _| |_  **  _| |_  **  _| |_  **  _( )_ **'])),

[
'***  _ _   **   _ _   **   _ _   **   _ _  ***',
'*** /(.)J  **  /(.)J  **  C(.)J  **  C(.)J ***',
'*** _| |_  **  _| |_  **  _| |_  **  _( )_ **']);

Test.assertSimilar(display(headSmash(
[
'*****************************************',
'***********   _O_   *   _O_   ***********',
'**  _O_   *  /(.)J  *  /(.)J  *   _O_  **',
'** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
'** _( )_  *********************  _( )_ **',
'******************* X ******************'])),

[
'*****************************************',
'***********   _ _   *   _ _   ***********',
'**  _ _   *  /(.)J  *  /(.)J  *   _ _  **',
'** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
'** _( )_  *********************  _( )_ **',
'******************* X ******************']);

Test.assertSimilar(display(headSmash(
[
'*****************************************',
'***********   _O_   *   _O_   ***********',
'**  _O_   *  C(.)J  *  /(.)J  *   _O_  **',
'** /(.)J  *  _| |_  *  _/ )_  *  C(.)J **',
'** _/ )_  *********************  _/ |_ **',
'******************* X *******************',
'**********************  _O_  ************',
'**  _O_   *   _O_   *  /(.)J  *   _O_  **',
'** /(.)J  *  C(.)J  *  _/ )_  *  C(.)J **',
'** _( )_  *  _| |_  ***********  _/ |_ **',
'****************************************'])),

[
'*****************************************',
'***********   _ _   *   _ _   ***********',
'**  _ _   *  C(.)J  *  /(.)J  *   _ _  **',
'** /(.)J  *  _| |_  *  _/ )_  *  C(.)J **',
'** _/ )_  *********************  _/ |_ **',
'******************* X *******************',
'**********************  _ _  ************',
'**  _ _   *   _ _   *  /(.)J  *   _ _  **',
'** /(.)J  *  C(.)J  *  _/ )_  *  C(.)J **',
'** _( )_  *  _| |_  ***********  _/ |_ **',
'****************************************']);

Test.assertSimilar(headSmash([]),'Gym is empty');
Test.assertSimilar(headSmash(876),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(87654336),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(''),'Gym is empty');
Test.assertSimilar(headSmash(6),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(509876251),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(45),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(1),'This isn\'t the gym!!');
Test.assertSimilar(headSmash(11111111111),'This isn\'t the gym!!');

})

Test.describe("Random tests",_=>{
function randint(a, b){
  return Math.floor(Math.random()*(b-a+1)+a);
}



function solheadSmash(a) {

 if (a == [] || a == '') {
    return 'Gym is empty';
    }
 else if (a === Number(a)) {
    return 'This isn\'t the gym!!';
    }

  else {
  for (var i = 0; i < a.length; i++) {
    a[i] = a[i].replace(/O/g, ' ');
    }
    return a;
    }
}

var base = ['*', '*', ' ', ' ', 'O', 'O', 'J', '\\'];

for (var i = 0; i < 99; i++) {
  var string = [], x=[], count = 0, len = randint(5, 20);
  while (count < 10) {
     for (var j = 0; j < len; j++) {
    x.push(base[randint(0, base.length-1)]);
    }
  count++;
  x=x.join('');
  string.push(x);
  x=[];
  }

  Test.it(`testing for ${string}`,function(){
  Test.assertSimilar(headSmash(string), solheadSmash(string), 'You\'ve been crushed! You are not Chuck Norris', 'Nice');
  })
  }
  });
