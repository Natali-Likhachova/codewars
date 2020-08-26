/* Sample Tests: */
Test.describe("Example tests",()=>{
    Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
    Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
    Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
});