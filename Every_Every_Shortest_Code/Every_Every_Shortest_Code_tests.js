Test.describe("Basic tests",_=>{
Test.assertEquals(everyEvery([[66, 101], [99, 88], [77, 10]], 100), false);
Test.assertEquals(everyEvery([[78, 117], [110, 99, 104], [117, 107, 115]], 8), true);
Test.assertEquals(everyEvery([[101, 45, 75], [105, 99, 107]], 44), true);

Test.assertEquals(everyEvery([[101, 101], [199, 288], [377, 110]], 100), true);
Test.assertEquals(everyEvery([[78, 117, 89], [110, 99, 104, 3, 2, 110], [90909, 32, 117, 107, 115]], 80), false);
Test.assertEquals(everyEvery([[1, 5, 5], [5, 9, 1]], 44), false);

Test.assertEquals(everyEvery([[3646, 10331], [9494, 1848], [7567, 1670]], 1000), true);
Test.assertEquals(everyEvery([[748, 14417], [1410, 99, 1044], [1147, 1047, 115]], 1), true);
Test.assertEquals(everyEvery([[10561, 45234, 7543665], [10234325, 19439, 1122107]], 10044), true);

Test.assertEquals(everyEvery([[1166, 101.54], [9.9, 811.8], [65.77, 122.10]], 9.8), true);
Test.assertEquals(everyEvery([[7.8, 1.17], [1.10, 9.9, 1.04], [1.17, 1.07, 1.15]], 1), true);
Test.assertEquals(everyEvery([[123, 4.5, 43], [44, 959, 44]], 44), false);
});

Test.describe("Code Length Test",_=>{
Test.assertEquals(everyEvery.toString().length<=60,true, (everyEvery.toString().length-60) + ' characters too long!')
})

Test.describe("Random tests coming soon",_=>{
});
