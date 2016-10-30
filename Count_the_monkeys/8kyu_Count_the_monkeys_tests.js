Test.describe("monkeyCount", _ => {
  it("should work for fixed tests", _ => {
    Test.assertSimilar((monkeyCount(5)), [1, 2, 3, 4, 5]);
    Test.assertSimilar((monkeyCount(3)), [1, 2, 3]);
    Test.assertSimilar((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    Test.assertSimilar((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    Test.assertSimilar((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
  it("should work for random tests", _ => {
    function solution(n) {
      var count = [];
      for (var i = 1; i <= n; i++) {
        count.push(i);
      }
      return count;
    }
    for (let i = 0; i < 100; i++) {
      var randNum = Test.randomNumber();
      Test.assertSimilar(monkeyCount(randNum), solution(randNum));
    }
  });
});
