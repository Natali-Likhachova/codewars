<?php
/* Sample Tests: */
class MyTestCases extends TestCase
{
  public function testHelloWorld() {
    $this->assertEquals("hello world!", greet());
  }
}