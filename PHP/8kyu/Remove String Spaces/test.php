<?php
/* Sample Tests: */
class RemoveStringSpacesTest extends TestCase {
  public function testExamples() {
    $this->assertEquals('8j8mBliB8gimjB8B8jlB', no_space('8 j 8   mBliB8g  imjB8B8  jl  B'));
    $this->assertEquals('88Bifk8hB8BB8BBBB888chl8BhBfd', no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
    $this->assertEquals('8aaaaaddddr', no_space('8aaaaa dddd r     '));
  }
}
