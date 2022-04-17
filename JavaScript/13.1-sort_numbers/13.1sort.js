const numbers = [1, -5, 666, 2, 400, 11];

const ascSort = numbers.slice().sort((a, b) => a - b);
const descSort = numbers.slice().sort((a, b) => b - a);

console.log(ascSort);
console.log(descSort);
