arr = ["boo", "doooo", "hoo", "ro"];
function arrLength(arr) {
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    count.push(arr[i].length);
  }
  return count;
}
console.log(arrLength(arr));
