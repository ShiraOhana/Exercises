/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }
const welcome = () => "Welcome to Appleseeds Bootcamp!";

console.log(welcome());

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
console.log(power((a = 5)));

// From function expressions to IIFE functions.
// const squareRoot = (a) => Math.sqrt(a);
(function (a) {
  return Math.sqrt(a);
})(2);

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

let randomNumbers = ((a, b) => {
  return Math.random() * (a - b) + b;
})(1, 2);
console.log(randomNumbers());
