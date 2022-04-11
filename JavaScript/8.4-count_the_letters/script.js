const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letters(arr) {
  let convertLetters = arr.join("");
  convertLetters = convertLetters.toLowerCase();

  const counter = {};

  for (let char of convertLetters) {
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }
  return counter;
}

console.log(letters(array));
