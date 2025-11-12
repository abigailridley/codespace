//Task 1
//Write a function expression called reverseString(). It should accept a single argument representing a person's name. It should return a reverse string as shown below:
//reverseString("John");
// nhoJ

let reverseString = (name) => name.split("").reverse().join("");

console.log(reverseString("Rory"));

//Task2
//Write a function expression called reverseArray(). It should accept an array as a single argument. It should return a reversed array and it should work for any data type.

let reverseArray = (array) => array.reverse();

let array1 = [1, 2, 3, 4];
let array2 = ["I", "like", "JavaScript"];

console.log(reverseArray(array1));
console.log(reverseArray(array2));

//Task3
//Write a function expression called mostExpensiveItem(). It should accept an array of items as a single argument. It should return the item that has the most cost tied up, calculated by the amount in stock * price.

//Test data
let drinks = [
  { item: "irn bru", price: 3.25, stock: 50 }, //162.5
  { item: "fanta", price: 3.98, stock: 45 }, //179.1
  { item: "diet coke", price: 4.4, stock: 38 }, //167.2
  { item: "7up", price: 3.99, stock: 42 }, //167.58
];

function mostExpensiveItem(items) {
  let maxCost = 0;
  let expensiveItem = null;

  for (let item of items) {
    let totalCost = item.price * item.stock;
    if (totalCost > maxCost) {
      maxCost = totalCost;
      expensiveItem = item;
    }
  }
  return expensiveItem;
}

console.log(mostExpensiveItem(drinks));
