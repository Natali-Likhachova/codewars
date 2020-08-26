/* Sample Tests: */
Test.describe('Fixed Tests', _ => {
    Test.it("should work for the examples provided in the description", _ => {
        Test.expect(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
        Test.assertEquals('c'.isUpperCase(), false, 'c is not upper case');
        Test.assertEquals('C'.isUpperCase(), true, 'C is upper case');
        Test.assertEquals('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
        Test.assertEquals('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
        Test.assertEquals('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
        Test.assertEquals('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
    });

    Test.it("should also work for a few other basic tests", _ => {
        Test.assertEquals('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
        Test.assertEquals('hello world'.isUpperCase(), false, 'hello world is not upper case');
        Test.assertEquals('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
        Test.assertEquals('hello World'.isUpperCase(), false, 'hello World is not upper case');
        Test.assertEquals('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
        Test.assertEquals('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
        Test.assertEquals('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
        Test.assertEquals('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
        Test.assertEquals('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
        Test.assertEquals('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
        Test.assertEquals('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
        Test.assertEquals('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
        Test.assertEquals('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
        Test.assertEquals('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
        Test.assertEquals('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
        Test.assertEquals('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
        Test.assertEquals('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
        Test.assertEquals('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
    });
});