function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}
let israel = percentageOfWorld1(9.2);
let finland = percentageOfWorld1(18.6);
let canada = percentageOfWorld1(30);

console.log(israel, finland, canada);

const percentageOfWorld2 = (population) => {
  let percentage = (population / 7900) * 100;
  return percentage;
};
let israel2 = percentageOfWorld2(9.2);
let finland2 = percentageOfWorld2(18.6);
let canada2 = percentageOfWorld2(30);

console.log(israel2, finland2, canada2);
