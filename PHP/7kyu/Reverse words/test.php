<?php
/* Sample Tests: */
class MyTestCases extends TestCase
{
    public function testBasicTests() {
        $this->assertEquals('ehT kciuq nworb xof spmuj revo eht yzal .god', reverseWords('The quick brown fox jumps over the lazy dog.'));
        $this->assertEquals('elppa', reverseWords('apple'));
        $this->assertEquals('a b c d', reverseWords('a b c d'));
        $this->assertEquals('elbuod  decaps  sdrow', reverseWords('double  spaced  words'));
        $this->assertEquals('desserts stressed', reverseWords('stressed desserts'));
        $this->assertEquals('olleh olleh', reverseWords('hello hello'));
    }
}