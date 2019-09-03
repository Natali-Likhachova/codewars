/* Sample Tests: */
Test.describe("Sample tests", function() {
    Test.it("should pass sample tests", function() {
        Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
        Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
        Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
        Test.assertDeepEquals(divisibleBy([0], 4), [0]);
        Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
    })
})