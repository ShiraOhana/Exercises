const book = {
  name: "once and the futer witches",
  autor: "Alix",
  year: 2021,
};
const book2 = {
  name: "Alice in the wonderland",
  autor: "Louis Carol",
  year: 1951,
};
const bookUtils = {
  getFirstPublished: function () {
    book.year < book2.year ? book.name : book2.name;
  },
};
bookUtils.setNewEdition = (book, edition) => {
  book.latestEdition = edition;
};
bookUtils.setNewEdition(book, 2022);
console.log(book);

bookUtils.setLanguage = (book, language) => {
  book.language = language;
};
bookUtils.setLanguage(book, "Japaness");
console.log(book);

bookUtils.setTranslation = (book, language, translator) => {
  book.translation = {
    translator,
    language,
  };
};
bookUtils.setTranslation(book, "English", "Hebrew");
console.log(book);

bookUtils.setPublisher = (book, name, location) => {
  book.publisher = {
    name,
    location,
  };
};
