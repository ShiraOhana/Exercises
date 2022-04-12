// 1

function isString(string, func) {
  if ("string" === typeof string) {
    func(string);
  }
}
isString("HI!", console.log);

// 2
function firstWordUpperCase(str, fun) {
  let newStr = str.split(" ");
  newStr[0] = newStr[0].toUpperCase();
  let makeStr = newStr.join(" ");
  console.log(makeStr);
  return fun(str);
}

function dashesBetweenWords(str) {
  let dashArray = str.split(" ");
  let dash = dashArray.join("-");
  console.log(dash);
  //   console.log(str.replaceAll(" ", "-"));
}
firstWordUpperCase("Hello there old friend", dashesBetweenWords);

// 3 4
function firstAction() {
  console.log("Im the first action");
}

setTimeout(firstAction, 5000);
