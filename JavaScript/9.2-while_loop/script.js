let array = ["boo", "doooo", "hoo", "ro"];
function arrLength(arr) {
  let count = [];
  let i = 0;
  while (i < arr.length) {
    count.push(arr[i].length);
    i++;
  }
  return count;
}
console.log(arrLength(array));
