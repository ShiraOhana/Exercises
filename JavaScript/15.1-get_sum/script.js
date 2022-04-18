function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));

// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
//debugger in the browser
// 3. Explain the bug in your own words.
// I got an error about the length so I added a comma in line 10 (console.log).
//Afterword I got another error "Assignment to constant variable." So I changed the variable assignment to let instead of const(line 2).
// After that, I got undefined because the function didn't have a return, so I added on line 9 "return sum;" and the function returned 100

// 4. Fix the code and submit it all.
//Fixed code above
