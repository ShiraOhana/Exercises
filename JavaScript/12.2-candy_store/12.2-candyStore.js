// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.
// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
// function getCandy(candyStore, id){
// //your code
// }
// function getPrice(candyStore, id){
// //your code
// }
// function addCandy(candyStore, id, name, price){
// //your code
// }
// function buy(candyStore, id){
// //your code
// }
const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1
function getCandy(candyStore, id) {
  return candyStore.candies.find((candy) => candy.id === id);
}

// 2
function getPrice(candyStore, id) {
  const specificCandy = getCandy(candyStore, id);
  return specificCandy.price;
}

// 3
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name, id, price, amount: 1 });
}

addCandy(candyStore, "587tk", "mars", 8);

//4
function buy(candyStore, id) {
  const specificCandy = getCandy(candyStore, id);
  if (specificCandy.amount > 0) {
    specificCandy.amount -= 1;
  } else {
    return "Candy is not available";
  }
  candyStore.cashRegister += specificCandy.price;
}
