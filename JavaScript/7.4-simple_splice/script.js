// You have this array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// using splice modify the array to be this:
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits = fruits.splice(2, 0, "Kiwi");
console.log(fruits);
