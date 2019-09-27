/* Sample Tests: */
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(phoneCall(3,1,2,20) , 14);

        Test.assertEquals(phoneCall(2,2,1,2) , 1);

        Test.assertEquals(phoneCall(10,1,2,22) , 11);

        Test.assertEquals(phoneCall(2,2,1,24) , 14);

        Test.assertEquals(phoneCall(1,2,1,6) , 3);

    })});