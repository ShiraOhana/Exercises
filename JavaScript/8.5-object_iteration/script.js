const obj = {
  fruit: "apple",
  veggie: "potato",
  cheese: "cheder",
};

function func(obj) {
  const swappedObj = {};
  for (let key in obj) {
    let valueKey = obj[key];
    swappedObj[valueKey] = key;
  }
  return swappedObj;
}
console.log(func(obj));
