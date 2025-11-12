// Q1 Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below:

let greet = (name) => "Hello " + name + "!";

console.log(greet("Aoife"));
console.log(greet("Caoimhe"));

//Q2 Convert the function isEven() into an equivalent arrow function.

//Traditional function
function isEven(num) {
  return num % 2 === 0;
}

//Convert to anon function
let isEven = function (num) {
  return num % 2 === 0;
};

//Convert to arrow function
//Step 1
let isEven = (num) => {
  return num % 2 === 0;
};
//Step 2
let isEven = (num) => num % 2 === 0;
//Step 3
let isEven = (num) => num % 2 === 0;
