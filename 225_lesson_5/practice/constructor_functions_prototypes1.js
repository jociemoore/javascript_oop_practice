// ------------
// Question #1
// ------------

var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();

foo.bar();
Foo();

var obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);


// logs:
// 2
// 2 -- Foo() is called with global context and changes value of global 'a'
// 2
// 2
// 2














// ------------
// Question #2
// ------------

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.circumference = RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);

// logs: 
// NaN
// NaN

// Fix:

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.circumference = RECTANGLE.circumference.call(this);
}

var rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.circumference);















// ------------
// Question #3
// ------------

function Circle (radius) {
  return {
    radius: radius,
    area: function () {
      return Math.PI * Math.pow(radius, 2);
    },
  };
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27


//-------------------

var Circle = function(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27












// ------------
// Question #4
// ------------

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
}

console.log(ninja.swingSword());

// logs:
// true
// Here a Ninja object is created using the constructor function and stored in 'ninja'. The shared behavior for all objects created from the constructor function are defined on the prototype so when 'ninja.swingSword()' is called 'this.swung' refers to that context up the prototype chain.













// ------------
// Question #5
// ------------

function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  }
}

console.log(ninja.swingSword());

// logs: 
// TypeError
// Here we do not add a method to the constructor function's prototype object, we are actually pointing it to a new object all together. But as 'ninja' was created beforehand, it still points to the original constructor function prototype object that does not define the 'swingSword' behavior.














// ------------
// Question #6
// ------------

function Ninja(){
  this.swung = false;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true












// ------------
// Question #7
// ------------

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
// XX -- var ninjaB = ninjaA;
var ninjaB = Object.create(ninjaA);

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true






