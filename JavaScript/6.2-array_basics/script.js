const people = ["Greg", "Mary", "Devon", "James"];

// // First question
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// // 2
people.shift();
console.log(people);
// // 3
people.pop(people);
console.log(people);
// // 4
people.unshift("Matt");
console.log(people);
// // 5
people.push("Shira");
console.log(people);
// // 6
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}
// // 7
console.log(people.slice(2));
// // 8
console.log(people.indexOf("Mary"));
// // 9
console.log(people.indexOf("Foo"));
// 10
// const people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
// 11
let withBob = people.concat("bob");
console.log(withBob);
