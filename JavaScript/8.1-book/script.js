let book = {
  bookname: "The once and future witches",
  autor: "Alix",
  year: 2020,
  pages: 578,
};

function whatsInTheBook(book) {
  console.log(
    `The book ${book.bookname} was written by ${book.autor} in the year ${book.year}`
  );
}
whatsInTheBook(book);
