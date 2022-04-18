function findSmallest(a, b, c) {
  if (a < b < c) {
    return c;
  } else if (a < c < b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
//Debugger in the browser
// 3. Explain the bug in your own words.
//The function wasn't working because in line 10 while trying to call the function, there was a typo + the signs of greater than and smaller than were the other way around
// 4. Fix the code and submit it all.
