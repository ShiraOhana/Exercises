1;
let nums = [1, 2, 3, 4, 5];

nums.forEach(function doubleValues(n) {
  console.log(n * 2);
});

2;
let even = [];
nums.forEach(function onlyEvenValues(n) {
  if (n % 2 === 0) {
    even.push(n);
  }
  return even;
});

3;
let words = ["First", "Second", 56, "Third", "Last"];
let newArr = [];
const firstAndLast = (arr) => {
  arr.forEach(function (n, idx) {
    if (typeof n === "string" && (idx === 0 || idx === arr.length - 1)) {
      newArr.push(n);
    }
  });
  return newArr;
};

console.log(firstAndLast(words));

4;
let word = "beauty beautiful";
const vowelCount = (str) => {
  let vowles = [];
  let toLowerCase = str.toLowerCase().split("");

  console.log(toLowerCase);

  toLowerCase.forEach((char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "a" ||
      char === "i" ||
      char === "u"
    ) {
      vowles.push({ char });
    }
  });
  return vowles;
};
console.log(vowelCount(word));

5;
let sentence = "Hello world";
const capitalizes = (sentence) => {
  //   let array = [];
  let toUpperCase = sentence.toUpperCase().split("").join("");
  return toUpperCase;
};
console.log(capitalizes(sentence));

// 6
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let word2 = "Hello world";

const shiftLetters = (str) => {
  let toLowerCase = str.toLowerCase().split("");
  toLowerCase.forEach(char, (idx) => {
    word;
  });
};
console.log(shiftLetters("Hello world"));

// 7
