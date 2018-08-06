// ----------------------------------

// 1. Vehicle constructor function
function Vehicle() {}

// Setting properties on the prototype. There are any properties and methods that you want applied to every new instance of this Vehicle.
Vehicle.prototype = {
  doors: 4,
  wheels: 4,
};

// Creating new instances of Vehicle with new keyword.
var sedan = new Vehicle();
var coupe = new Vehicle();

// Properties are inherited from the Vehicle, but you can modify them.
coupe.doors = 2;

// check to see where a property lives -- on the parent object or on the instance?
console.log(sedan.hasOwnProperty('doors'));
console.log(coupe.hasOwnProperty('doors'));


// ----------------------------------


function Coupe() {}
// Inherits properties from the Vehicle
Coupe.prototype = new Vehicle();
// Set its own properties
Coupe.prototype.doors = 2;

function Motorcycle() {
  this.doors = 0;
  this.wheels = 2;
}
Motorcycle.prototype = new Vehicle();
// Careful! Modify the prototype
// Alternative method: Motorcycle.prototype.doors = 0;
// Alternative method: Motorcycle.prototype.wheels = 2;

var coupe = new Coupe();
var motorcycle = new Motorcycle();

console.log(coupe);
console.log(motorcycle);

console.log(coupe instanceof Coupe);
console.log(coupe instanceof Motorcycle);
console.log(coupe instanceof Vehicle);


// ----------------------------------

// 2. Alternative way to create the prototype on a constructor that inherits from another constructor
function Sedan() {}

Sedan.prototype = Object.create(Vehicle.prototype)

var sedan = new Sedan();

console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);



// ----------------------------------


// Singleton object: created with object literal
var prototype_car = {
  doors: 5,
  wheels: 3,
};

var ceo_car = Object.create(prototype_car);

ceo_car.doors = 7;
console.log(ceo_car.doors);
console.log(prototype_car.doors);


// ----------------------------------

// A way to call the constructor with or without the new keyword
function Truck() {
  var o = this;
  if (!(o instanceof Truck)) {
    o = new Truck();
  }

  o.hitch = true;
  return o;
}

var truck = Truck();
console.log(truck);







