// Example 1

function Animal(type) {
  this.type = type;
  //  type = land, water, or air
};

Animal.prototype.move = function() {
  console.log('Animal is moving.');
};



/////////////////////////////
var Dog = function() {};
// Method 1: Use Object returned from the Animal constructor
Dog.prototype = new Animal('land');
// Method 2: Use Object created by Object.create(Animal.prototype)
Dog.prototype = Object.create(Animal.prototype);
// Incorrect Method: 
Dog.prototype = Animal.prototype;
/////////////////////////////




Dog.prototype.say = function() {
  console.log(this.name + ' says WOOF!');
}

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
}





var myDog = new Dog;
myDog.constructor;        // returns Animal constructor function

// To manually reset:
Dog.prototype.constructor = Dog;
myDog.constructor;        // returns 'Dog' contructor function

// Using the Incorrect Method:
var myNewAnimal = new Animal('air');
myNewAnimal.name = 'Foo';
myNewAnimal.say();              // logs Foo says WOOF!
myNewAnimal.move();             // Animal is moving.

var fido = new Dog();
fido.move()               // 'Animal is moving.'

