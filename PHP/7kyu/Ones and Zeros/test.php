<?php
/* Sample Tests: */
class MyTestCases extends TestCase
{
  public function testSampleTests() {
    $this->assertEquals(1, binaryArrayToNumber([0,0,0,1]));
    $this->assertEquals(2, binaryArrayToNumber([0,0,1,0]));
    $this->assertEquals(15, binaryArrayToNumber([1,1,1,1]));
    $this->assertEquals(6, binaryArrayToNumber([0,1,1,0]));
  }
}