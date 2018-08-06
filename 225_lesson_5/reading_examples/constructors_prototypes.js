// Example 1

function foo() {};
var obj = foo.prototype;
Object.getOwnPropertyNames(obj);      // ['constructor']
obj.constructor === foo;              // true











// Example 2 

var Foo = function() {};
var obj = Foo.prototype;

var bar = new Foo();
var baz = new Foo();

Object.getPrototypeOf(bar) === obj;   // true
Object.getPrototypeOf(baz) === obj;   // true

bar.constructor === Foo;              // true
baz.constructor === Foo;              // true










// Example 3

var Foo = function() {};
var Qux = function() {};

Foo.__proto__ === Foo.prototype;                // false
Object.getPrototypeOf(Foo) === Foo.prototype;   // false

Qux.__proto__ === Qux.prototype;                // false
Object.getPrototypeOf(Qux);                     // false

var bar = new Foo();
Object.getPrototypeOf(bar) === Foo.prototype;   // true

var baz = new Qux();
Object.getPrototypeOf(baz) === Qux.prototype;   // true











// Example 4 - when a function is used as a constructor

function Foo(a, b) {
  this.a = a;
  this.b = b;
}


// Illustration A

function Foo(a ,b) {
  // this = new Object();
  this.a = a;
  this.b = b;
  // this.__proto__ = Foo.prototype
  // return this;
}


// Illustration B

function Foo(a ,b) {
  // this = Object.create(Foo.prototype);
  this.a = a;
  this.b = b;
  // return this;
}











// Example 5 

var Dog = function() {};

Dog.prototype.say = function() {
  console.log(this.name + ' says WOOF!');
}

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
}

var fido = new Dog();
fido.name = 'Fido';
fido.say();          // Fido says WOOF!
fido.run();          // Fido runs away.

var spot = new Dog();
spot.name = 'Spot';
spot.say();          // Spot says WOOF!
spot.run();          // Spot runs away.





