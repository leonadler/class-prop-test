class Test {
  someProp = 42;
}

if ((new Test()).someProp !== 42) {
  process.exitCode = 2;
}
