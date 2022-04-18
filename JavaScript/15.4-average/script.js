function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// 2. Which debug method did you use to find the bug?
//Browser debugger
// 3. Explain the bug in your own words.
// Sum was not initialized, I set it to 0 and the bug was fixed
// 4. Fix the code and submit it all.
