let arr1 = Array(100).fill(1, 0);
console.log(arr1);

let arr2 = Array.from({ length: 100 }, (v, i) => i);
console.log(arr2);

const people = {
  firstName: "Dave",
  lastName: "Josh",
  age: 25,
  isCitizen: false,
};
const propertyValues = Object.values(people);

console.log(propertyValues);

const letters = ["a", "b", "c"];
const arrayToObject = Object.assign({}, letters);
console.log(arrayToObject);

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ foo: 123 })); // false

const arr3 = arr2.shift();
console.log(`arr3 ${arr3}`);

console.log(`arr3 ${arr2}`);

const arr4 = [...arr1];
console.log(arr4);
