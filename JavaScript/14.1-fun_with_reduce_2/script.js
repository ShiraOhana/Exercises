// Write a function called extractOnlyValue which accepts an array of
// objects and a key and returns a new array with the value of each object at
// the key

const arrOfObj = [
  { book: "Harry Potter" },
  { book: "Good Omen" },
  { book: "The Bees" },
];

function extractOnlyValue(key, arr) {
  let array = [];
  arrOfObj.reduce((total, curr) => {
    array.push(curr[key]);
  }, 0);
  return array;
}

// console.log(extractOnlyValue("book", arrOfObj));

// Write a function called countOnlyVowels which accepts a string and
// returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase letter should count

const countOnlyVowels = (str) => {
  let vowels = "aeoui";
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      if (vowels.includes(cur)) {
        acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      }
      return acc;
    }, {});
};
// console.log(countOnlyVowels("Hola Amigo"));

// Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it
// .with each object now including the key and value passed to the function
const statusArr = [{ name: "Shira" }, { name: "Yuval" }];

const addKeyAndValue = (arrOfObj2, key, val) => {
  return arrOfObj2.reduce((acc, cur, index) => {
    cur[key] = val;
    acc.push({ ...cur, key: val });
    return acc;
  }, []);
};
console.log(addKeyAndValue(statusArr, "status", "student"));
