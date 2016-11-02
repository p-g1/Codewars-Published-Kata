Test.describe("Basic tests",_=>{
Test.assertSimilar(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
Test.assertSimilar(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
Test.assertSimilar(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

Test.assertSimilar(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
Test.assertSimilar(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
Test.assertSimilar(dbSort(["Hackathon", "Katathon", "Code", "CodeWars", "Laptop", "Macbook", "JavaScript", 1, 5, 2]), [1,2,5,"Code","CodeWars","Hackathon","JavaScript","Katathon","Laptop","Macbook"]);

Test.assertSimilar(dbSort([66, 't', 101, 0, 1, 1]), [0,1,1,66,101,"t"]);
Test.assertSimilar(dbSort([78, 117, 110, 99, 104, 117, 107, 115, 4, 6, 5, 'west']), [4,5,6,78,99,104,107,110,115,117,117,"west"]);
Test.assertSimilar(dbSort([101, 45, 75, 105, 99, 107, 'y', 'no', 'yes', 1, 2, 4]), [1,2,4,45,75,99,101,105,107,"no","y","yes"]);
Test.assertSimilar(dbSort([80, 117, 115, 104, 45, 85, 112, 115, 6, 7, 2]), [2,6,7,45,80,85,104,112,115,115,117]);
Test.assertSimilar(dbSort([1, 1, 1, 1, 1, 2, '1', '2', 'three', 1, 2, 3]), [1,1,1,1,1,1,2,2,3,"1","2","three"]);
Test.assertSimilar(dbSort([78, 33, 22, 44, 88, 9, 6, 0, 5, 0]), [0,0,5,6,9,22,33,44,78,88]);
Test.assertSimilar(dbSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]), [1,1,2,2,3,3,4,5,6,7,8,9]);
Test.assertSimilar(dbSort([82, 18, 72, 1, 11, 12, 12, 12, 12, 115, 667, 12, 2, 8, 3]), [1,2,3,8,11,12,12,12,12,12,18,72,82,115,667]);

Test.assertSimilar(dbSort(['t', 'e', 's', 't', 3, 4, 1]),[1,3,4,"e","s","t","t"]);
Test.assertSimilar(dbSort(['what', 'a', 'great', 'kata', 1, 2, 2]), [1,2,2,"a","great","kata","what"]);
Test.assertSimilar(dbSort([66, 'codewars', 11, 'alex loves pushups', 2, 3, 0]), [0,2,3,11,66,"alex loves pushups","codewars"]);
Test.assertSimilar(dbSort(['come', 'on', 110, '2500', 10, '!', 7, 15, 5, 6, 6]), [5,6,6,7,10,15,110,"!","2500","come","on"]);
Test.assertSimilar(dbSort(['when\'s', 'the', 'next', 'Katathon?', 9, 7, 0, 1, 2]), [0,1,2,7,9,"Katathon?","next","the","when's"]);
Test.assertSimilar(dbSort([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115, 6, 7, 0]), [0,5,6,7,7,8,115,"bored","of","tests","writing"]);
Test.assertSimilar(dbSort(['anyone', 'want', 'to', 'hire', 'me?', 2, 4, 1]), [1,2,4,"anyone","hire","me?","to","want"]);
});

Test.describe("Random tests coming soon",_=>{

});
