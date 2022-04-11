const mycountry = {
  country: "Israel",
  capital: "Tel-Aviv",
  language: "Hebrew",
  population: 9,
  neighbours: ["Iraq", "Egypt", "Syria", "Lebanon"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million people, their mother tongue is ${this.language} they
      have ${this.neighbours.length}  neighbouring countries and a capital called ${this.capital}`
    );
  },
};
console.log(mycountry.describe());
