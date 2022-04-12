// function steps(n) {
//   for (i = 0; i < n; i++) {
//     console.log("#".repeat(i) + " ".repeat(n - i));
//   }
// }
// steps(8);

// loop inside another loop way:
const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let stringToPrint = "";
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        stringToPrint += "#";
      } else {
        stringToPrint += "*";
      }
    }
    console.log(stringToPrint);
  }
};
steps(5);
