// ------------
// Question #1
// ------------

var shape = {
  type: this.type,
  getType: function () {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

Triangle.prototype.constructor = Triangle;


var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"











// ------------
// Question #2
// ------------

function User(first, last) {
  if (this === window) {
    return new User(first, last);
  }
  
  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe











// ------------
// Question #3
// ------------

function createObject(obj) {
  function NewObj () {};
  NewObj.prototype = obj;
  return new NewObj();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true











// ------------
// Question #4
// ------------

Object.prototype.begetObject = function() {
  return Object.create(this);
};

var foo = {
  a: 1
};

var bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true











// ------------
// Question #5
// ------------

function neww(constructor, args) {
  var output;

  newObj = Object.create(constructor.prototype);
  output = constructor.apply(newObj, args);

  return output || newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}






