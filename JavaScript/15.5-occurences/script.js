function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// line 5
// 2. Which debug method did you use to find the bug?
// Browser debugging
// 3. Explain the bug in your own words.
//The counter wasn't counting, I changed it to "++"" instead of "counter +1"

// 4. Fix the code and submit it all.
