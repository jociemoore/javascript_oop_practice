// Example 1

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return (this.firstName + ' ' + this.lastName).trim();
  }
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

john.fullName();        // John Doe
jan.fullName();         // Jane

john.constructor;       // function Person()
jan.constructor;        // function Person()

john,instanceof Person; // true
jane instanceof Person; // true













// Example 2

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return (this.firstName + ' ' + this.lastName).trim();
  }
}

Person('John', 'Doe');
window.fullName();        // John Doe











// Question 1 

// Constructor functions have capitilazed names whereas other functions have lowercase names.











// Question 2

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = Lizard();
lizzy.scamper(); // TypeError

// A TypeError is thrown because without the new keyword when the Lizard object is invoked, 'this' refers to the global object within the function and applies properties to it instead. scamper is an undefined property on lizzy.











// Question 3

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

var lizzy = new Lizard();
lizzy.scamper(); // I'm scampering!





