/* Sample Tests: */
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(lateRide(240) , 4)

        Test.assertEquals(lateRide(808) , 14)

        Test.assertEquals(lateRide(1439) , 19)

        Test.assertEquals(lateRide(0) , 0)

        Test.assertEquals(lateRide(23) , 5)

        Test.assertEquals(lateRide(8) , 8)

    })})