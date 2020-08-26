<?php
/* Sample Tests: */
class MyTestCases extends TestCase
{
  public function test()
  {
    echo "<h1>Static Test Cases: </h1><br>";
    $this->check(basicOp('+', 4, 7), 11);
    $this->check(basicOp('-', 15, 18), -3);
    $this->check(basicOp('*', 5, 5), 25);
    $this->check(basicOp('/', 49, 7), 7);
  }
  private function check($a, $b)
  {
    echo "<span style='font-size: 20px'><span style='color:" . ($a == $b ? "green'>True:" : "red'>False:") . "</span></span><br>" . "Expected: " . $b . " <br> Got: " . $a . "<br>";
    $this->assertSame($a, $b);
  }
}