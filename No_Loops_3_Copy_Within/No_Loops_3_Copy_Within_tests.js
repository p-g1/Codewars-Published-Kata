Test.describe("Basic tests",_=>{
Test.assertSimilar(copy([1, 2, 3, 4, 5], 0, 2, -2), [1, 2, 3, 1, 2]);
Test.assertSimilar(copy([1, 2, 3, 4, 5], 3, 4, 0), [4, 2, 3, 4, 5]);
Test.assertSimilar(copy([1, 2, 3, 4, 5], -1, -2, -3), [1, 2, 3, 4, 5]);

Test.assertSimilar(copy(["Banana", "Orange", "Apple", "Mango"], 0, 2, 2), ["Banana", "Orange", "Banana", "Orange"]);
Test.assertSimilar(copy(["C", "W", "W", "W"], 1, 2, 0), ["W", "W", "W", "W"]);
Test.assertSimilar(copy(["Hackathon", "Katathon", "Code", "CodeWars", "Laptop", "Macbook", "JavaScript"], 1, 5, 2), ["Hackathon","Katathon","Katathon","Code","CodeWars","Laptop","JavaScript"]);

Test.assertSimilar(copy([66, 101], 0, 1, 1), [66,66]);
Test.assertSimilar(copy([78, 117, 110, 99, 104, 117, 107, 115], 4, 6, 5), [78,117,110,99,104,104,117,115]);
Test.assertSimilar(copy([101, 45, 75, 105, 99, 107], 1, 2, 4), [101,45,75,105,45,107]);
Test.assertSimilar(copy([80, 117, 115, 104, 45, 85, 112, 115], 6, 7, 2), [80,117,112,104,45,85,112,115]);
Test.assertSimilar(copy([1, 1, 1, 1, 1, 2], 1, 2, 3), [1,1,1,1,1,2]);
Test.assertSimilar(copy([78, 33, 22, 44, 88, 9, 6], 0, 5, 0), [78,33,22,44,88,9,6]);
Test.assertSimilar(copy([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 2, 3), [1,2,3,2,5,6,7,8,9]);
Test.assertSimilar(copy([82, 18, 72, 1, 11, 12, 12, 12, 12, 115, 667, 12], 2, 8, 3), [82,18,72,72,1,11,12,12,12,115,667,12]);

Test.assertSimilar(copy(['t', 'e', 's', 't'], 3, 4, 1), ["t","t","s","t"]);
Test.assertSimilar(copy(['what', 'a', 'great', 'kata'], 1, 2, 2), ["what","a","a","kata"]);
Test.assertSimilar(copy([66, 'codewars', 11, 'alex loves pushups'], 2, 3, 0), [11,"codewars",11,"alex loves pushups"]);
Test.assertSimilar(copy(['come', 'on', 110, '2500', 10, '!', 7, 15], 5, 6, 6), ["come","on",110,"2500",10,"!","!",15]);
Test.assertSimilar(copy(['when\'s', 'the', 'next', 'Katathon?', 9, 7], 0, 1, 2), ["when's","the","when's","Katathon?",9,7]);
Test.assertSimilar(copy([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115], 6, 7, 0), ["tests",7,5,"bored","of","writing","tests",115]);
Test.assertSimilar(copy(['anyone', 'want', 'to', 'hire', 'me?'], 2, 4, 1), ["anyone","to","hire","hire","me?"]);
});

Test.describe("For loop test",_=>{
Test.assertEquals(copy.toString().indexOf('for'),-1, 'No loops please')
})

Test.describe("While loop test",_=>{
Test.assertEquals(copy.toString().indexOf('while'),-1, 'No loops please')
})

Test.describe("Random tests coming soon",_=>{

});
