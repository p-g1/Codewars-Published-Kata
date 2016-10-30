Test.describe("Basic tests",_=>{
Test.assertEquals((daysUntilChristmas(new Date(2016,11,9))), 16);
Test.assertEquals((daysUntilChristmas(new Date(2016,11,8))), 17);
Test.assertEquals((daysUntilChristmas(new Date(1996,11,7))), 18);
Test.assertEquals((daysUntilChristmas(new Date(2015,1,23))), 305);
Test.assertEquals((daysUntilChristmas(new Date(2001,6,11))), 167);
Test.assertEquals((daysUntilChristmas(new Date(2000,11,9))), 16);
Test.assertEquals((daysUntilChristmas(new Date(1978,2,18))), 282);
Test.assertEquals((daysUntilChristmas(new Date(2016,11,25))), 0);
Test.assertEquals((daysUntilChristmas(new Date(2016,11,26))), 364);
Test.assertEquals((daysUntilChristmas(new Date(2015,11,26))), 365);
})

Test.describe("Basic tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const solXmas=day=>(diff=>diff>=0 ? diff : 365+diff)((new Date(day.getFullYear()+(day.getMonth()==11 && day.getDate()>25 ? 1 : 0),11,25)-day)/86400000);

for (var qu=0;qu<40;qu++){
  if (randint(0,1)) var y=~~(randint(1900,2100)/4)*4-1,m=11,d=randint(26,31);
  else var y=randint(1900,2100), m=randint(0,11),d=randint(1,31);
  var date=new Date(y,m,d);
  Test.it(`Testing for ${[d,["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m],y].join(" ")}`,_=>{
  Test.assertEquals((daysUntilChristmas(date)), solXmas(date),"It should work for random inputs too");
  })
}
