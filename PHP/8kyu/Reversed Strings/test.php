<?php
class ReversedStringsTest extends TestCase {
  public function testExamples() {
    $this->assertEquals("dlrow", solution("world"));
    $this->assertEquals("olleh", solution("hello"));
    $this->assertEquals("", solution(""));
    $this->assertEquals('h', solution("h"));
  }
}