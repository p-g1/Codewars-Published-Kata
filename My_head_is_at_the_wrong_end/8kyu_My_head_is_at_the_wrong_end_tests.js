Test.describe("Basic tests",_=>{
Test.assertSimilar(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
Test.assertSimilar(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
Test.assertSimilar(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
Test.assertSimilar(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
Test.assertSimilar(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=arr=>arr.reverse();
base=["Kenshiro","Raoh","Kaiou","Toki","Hyo","Jagi","Han","Souther","Falco","Rei","Shoki","Juda","Taiga","Shin","Boltz","Shin","Soria"]
Array.prototype.shuffle=function(){
  var i=this.length,j,k;
  for (;i;){
    j=~~(Math.random()*this.length);
    k=this[--i];this[i]=this[j];this[j]=k
  }
  return this;
}

for (var i=0;i<40;i++){
  arr=base.shuffle().slice(0,3);
  Test.it(`Testing for ${arr}`,_=>{
  Test.assertSimilar(fixTheMeerkat([].concat(arr)),sol(arr),"It should work for random inputs too")
  })
}
})
