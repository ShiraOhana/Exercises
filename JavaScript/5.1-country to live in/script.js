function countryToLiveIn(language, isIsland, population, country) {
  if (language === "english" && population > 50 && isIsland === false) {
    console.log("You  should live in Finland");
  } else {
    console.log("Finland does not meet your criteria");
  }
}
countryToLiveIn("english", false, 60, "Finland");
countryToLiveIn("russian", true, 40, "Finland");
