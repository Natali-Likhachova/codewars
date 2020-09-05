<?php
/* Sample Tests: */
class MyTestCases extends TestCase
{
    public function testStaticOperations()
    {
        $this->assertSame(2, stray([1, 1, 2]));
        $this->assertSame(4, stray([4, 2, 2, 2, 2]));
        $this->assertSame(5, stray([4, 4, 4, 5, 4, 4, 4]));
    }
}