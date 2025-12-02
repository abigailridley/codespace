// Coding Task 1 - Classes and Objects
//User class
// class contains first and last name of each user
// says 'hello'

// class User {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   greet() {
//     console.log(`Hello ${this.firstname} ${this.lastname}`);
//   }
// }

// const user1 = new User("John", "Doe");
// const user2 = new User("Jane", "Doe");

// user1.greet();
// user2.greet();

//Coding Task 2 - Encapsulation
// Add the getters and setters methods after the class constructor.
//Change your hello() method to return 'Hello World!'.
//Create an user object called user that will represent the User class.
//Use the setters methods to set the firstName and lastName instance variables of your user object.
//Use getters methods to retrieve the firstName and lastName Strings from the user object and add a blank space in between.

// class User {
//   constructor(firstname, lastname) {
//     this._firstname = firstname;
//     this._lastname = lastname;
//   }
//   get firstname() {
//     return this._firstname;
//   }
//   set firstname(firstname) {
//     this._firstname = firstname;
//   }
//   get lastname() {
//     return this._lastname;
//   }
//   set lastname(lastname) {
//     this._lastname = lastname;
//   }

//   greet() {
//     console.log("Hello world!");
//     console.log(`My name is ${this.firstname} ${this.lastname}`);
//   }
// }
// const user = new User();
// user.firstname = "John";
// user.lastname = "Doe";
// user.greet();
// const user1 = new User("John", "Doe");
// const user2 = new User("Jane", "Doe");

// user1.greet();

//Task 3. - Inheritance - subclass & superclass

//create admin class - child class of user
//User class
//add to User class property username
//create setter method for username
//Admin class - inherits user class
//method - expressYourRole() - return str 'Admin'
//method in Admin class sayHello() - returns hello admin username
//Create object admin out of the class admin
//set name to Balthazar and say hello

// class User {
//   constructor(username) {
//     this._username = username;
//   }

//   get username() {
//     return this._username;
//   }
//   set username(username) {
//     this._username = username;
//   }
// }

// class Admin extends User {
//   constructor(name, username) {
//     super(name, username);
//   }
//   expressYourRole() {
//     console.log("Admin");
//   }
//   sayHello() {
//     console.log(`Hello admin, ${this.username}`);
//   }
// }

// const admin = new Admin("Balzathar");
// admin.sayHello();

//Coding Task 4 - Polymorphism
// User class
//Other classes will inherit from User
// Each child class will include their own version of a method that calculates a user's score
// Both classes must have a method called calcScores(), but the score calculation will be different in each class.

// class User {
//   constructor() {
//     this.numberOfArticles = 0;
//   }
//   getNumberOfArticles() {
//     return this.numberOfArticles;
//   }
//   setNumberOfArticles(int) {
//     this.numberOfArticles = int;
//   }

//   calcScores() {
//     return 0;
//   }
// }

// class Author extends User {
//   calcScores() {
//     console.log(this.numberOfArticles * 10 + 20);
//   }
// }

// class Editor extends User {
//   calcScores() {
//     console.log(this.numberOfArticles * 6 + 15);
//   }
// }

// const author = new Author();
// author.setNumberOfArticles(8);
// author.calcScores();

// const editor = new Editor();
// editor.setNumberOfArticles(15);
// editor.calcScores();

// Coding Task 5 - Abstraction
// In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.
class User {
  constructor(username) {
    this.username = username;
  }

  getusername() {
    return this.username;
  }
  setusername(username) {
    this.username = username;
  }
  stateYourRole() {
    return "";
  }
}

class Admin extends User {
  stateYourRole() {
    return "admin";
  }
}

class Viewer extends User {
  stateYourRole() {
    return "viewer";
  }
}

const admin = new Admin();
admin.setusername("Balzathar");
console.log(admin.username);
console.log(admin.stateYourRole());

const viewer = new Viewer();
viewer.setusername("Melchior");
console.log(viewer.username);
console.log(viewer.stateYourRole());
