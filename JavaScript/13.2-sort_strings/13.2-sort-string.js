const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a
const ascSort = foods.slice().sort();
const descSort = foods.slice().sort().reverse();

// console.log(descSort);
// console.log(ascSort);

// b
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const upperCase = foodsWithUpperCase.slice().sort();
const upperCaseReverse = foodsWithUpperCase.slice().sort().reverse();

// console.log(upperCase);
// console.log(upperCaseReverse);
//  c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longest = words.slice().sort(function (a, b) {
  return b.length - a.length;
});
console.log(longest);
