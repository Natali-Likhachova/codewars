/* Sample Tests: */
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(circleOfNumbers(10,2) , 7)

        Test.assertEquals(circleOfNumbers(10,7) , 2)

        Test.assertEquals(circleOfNumbers(4,1) , 3)

        Test.assertEquals(circleOfNumbers(6,3) , 0)

    })})