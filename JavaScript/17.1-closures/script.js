// Without running the code below, explain in your own words what the result
// of each block of code will be and why.

// Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// The answer is 5 (The function were never called so the assignmet of 9 doesn't change anything)

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

// The answer is 1. the function isn't returning anything

//Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// Three times 3 -> The i was assigned outside the loop so each iteration (with the timeout) returning 3, 3 times.
