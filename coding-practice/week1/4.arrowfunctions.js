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

//Q3 Convert the following JavaScript function declaration to arrow function syntax:

//traditional function
function counterFunc(counter) {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
}

//anon function
let counterFunc = function (counter) {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};

//Arrow
//Step 1
let counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};

//Q4 Write an arrow function for the following JavaScript function:

//Traditional
function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}
//Arrow
let nameAge = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
};

//Q5 Write the arrow function for the following:

//Trad
function printOnly() {
  console.log("printing");
}

//Arrow
let printOnly = () => console.log("printing");

//Q6 Write the arrow function for the following:

//Trad
function sum(num1, num2) {
  return num1 + num2;
}

// Arrow
let sum = (num1, num2) => num1 + num2;
