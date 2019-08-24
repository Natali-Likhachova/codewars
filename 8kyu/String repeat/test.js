/* Sample Tests: */
describe("Tests", function() {
    it ("Basic tests", function() {
        Test.assertSimilar(repeatStr(3, "*"), "***");
        Test.assertSimilar(repeatStr(5, "#"), "#####");
        Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    });
});