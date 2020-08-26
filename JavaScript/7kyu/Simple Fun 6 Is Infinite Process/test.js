/* Sample Tests: */
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(isInfiniteProcess(2,6) , false)

        Test.assertEquals(isInfiniteProcess(2,3) , true)

        Test.assertEquals(isInfiniteProcess(2,10) , false)

        Test.assertEquals(isInfiniteProcess(0,1) , true)

        Test.assertEquals(isInfiniteProcess(3,1) , true)

        Test.assertEquals(isInfiniteProcess(10,10) , false)

        Test.assertEquals(isInfiniteProcess(5,10) , true)

    })})