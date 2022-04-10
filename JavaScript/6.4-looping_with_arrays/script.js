let populations = [5, 18, 30, 9];

function populationPercentages(populations) {
  let percentages = [];
  for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));
  }
  return percentages;
}
console.log(populationPercentages(populations));

function percentageOfWorld1(populations) {
  let percentage = (populations / 7900) * 100;
  return percentage;
}
