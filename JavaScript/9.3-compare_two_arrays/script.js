const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compareArrays(arr, arr2) {
  let same = [];
  for (i = 0; i < arr.length; i++)
    for (j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        same.push(`${arr[i]}`);
      }
    }
  return same;
}
console.log(compareArrays(food, food1));
