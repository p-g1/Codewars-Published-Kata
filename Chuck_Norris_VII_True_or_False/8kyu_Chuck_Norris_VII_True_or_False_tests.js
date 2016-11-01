Test.describe("One and only test",_=>{
Test.assertEquals(ifChuckSaysSo(), false);
});

Test.describe("Cheat test",_=>{

function checkCode() {
  const ls = require('child_process').spawn('cat', ['/home/codewarrior/solution.txt']);

  var resp = ''
  var end = false;

  ls.stdout.on('data', function(data) {
    resp += data.toString();
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    end = true;
    if(code === 0) {
      if(resp.match(/false/g)) {
        Test.assertEquals(resp.match(/false/g),false,"You've been punched! Stop Cheating!");
      }
     else {
       console.log('Chuck loves you');
      Test.assertEquals(resp.match(/false/g)==null,true,"No roundhouse necessary");
     }
   }
 })
};

 checkCode();
})
