/* Sample Tests: */
Test.expect(!setAlarm(true, true), "Should be false.");
Test.expect(!setAlarm(false, true), "Should be false.");
Test.expect(setAlarm(true, false), "Should be true.");