let color = "BLUE";

switch (color.toLowerCase()) {
  case "yellow":
  case "pink":
  case "orange":
    console.log("light color");
    break;
  case "blue":
  case "purple":
  case "brown":
    console.log("dark color");
    break;

  default:
    console.log("None of the above");
}
