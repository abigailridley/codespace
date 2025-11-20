//Car class
class Car {
  //Class constructor
  constructor(make, model) {
    this.make = make;
    this.model = model; // 'this' removes ambiguity on which is attribute/variables
  }
  drive() {
    console.log("Vroom!");
  }
}

//instance of car class
const myCar = new Car("Toyota", "Corolla");

// Car drive method
myCar.drive();
console.log(myCar.make);
console.log(myCar.model);

// Animal Class

class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed, colour) {
    super(name);
    this.breed = breed;
    this.colour = colour;
  }
  sound() {
    console.log(`${this.name} barks`);
  }
  displayBreed() {
    console.log(`Breed: ${this.breed}`);
  }
  displayColour() {
    console.log(`Colour: ${this.colour}`);
  }
  sound() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("Dog");
myDog.sound();
