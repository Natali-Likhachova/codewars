/* Sample Tests: */
Test.describe("Example Tests", function() {
    Test.it("betterThanAverage([2, 3], 5) should return True", function() {
        Test.assertEquals(betterThanAverage([2, 3], 5), true);
    });

    Test.it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
        Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
    });

    Test.it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
        Test.assertEquals(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
    });
});