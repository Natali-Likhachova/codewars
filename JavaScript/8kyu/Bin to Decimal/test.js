/* Sample Tests: */
Test.describe("Example Tests", _ => {
    [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});