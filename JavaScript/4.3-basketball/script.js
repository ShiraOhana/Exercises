function avrageScore(x, y, z) {
  let avrage = (x + y + z) / 3;
  return avrage;
}
let johnsTeam = avrageScore(100, 100, 100);
let mikesTeam = avrageScore(100, 100, 100);
let marysTeam = avrageScore(100, 100, 100);

if (johnsTeam < mikesTeam) {
  console.log(`Mikes Team wom with ${mikesTeam} points`);
} else if (mikesTeam < marysTeam) {
  console.log(`Marys Team wom with ${marysTeam} points`);
} else if (johnsTeam < marysTeam) {
  console.log(`Johns Team won with ${johnsTeam} points`);
} else if (
  johnsTeam === mikesTeam &&
  marysTeam === mikesTeam &&
  marysTeam === johnsTeam
) {
  console.log("It's a draw!");
} else if (johnsTeam > mikesTeam) {
  console.log(`Johns Team won with ${johnsTeam} points`);
}
