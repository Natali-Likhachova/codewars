/* Sample Tests: */
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(knapsackLight(10,5,6,4,8) , 10)

        Test.assertEquals(knapsackLight(10,5,6,4,9) , 16)

        Test.assertEquals(knapsackLight(10,2,11,3,1) , 0)

        Test.assertEquals(knapsackLight(15,2,20,3,2) , 15)

        Test.assertEquals(knapsackLight(2,5,3,4,5) , 3)

        Test.assertEquals(knapsackLight(4,3,3,4,4) , 4)

        Test.assertEquals(knapsackLight(3,5,3,8,10) , 3)

    })})