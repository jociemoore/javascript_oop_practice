// Example 1 - object vs variables
var car = {
  fuel: 7.8,
  mpg: 37,
};

var fuel = 7.8;
var mpg = 37;








// Example 2 - Variables Expanded With Function

var smallCarFuel = 7.8;
var smallCarMpg = 37;

var largeCarFuel = 9.4;
var largeCarMpg = 29;

var truckFuel = 14.3;
var truckMpg = 23;

function vehicleRange(fuel, mpg) {
  return fuel * mpg;
}

vehicleRange(smallCarFuel, smallCarMpg);   // 288.6
vehicleRange(largeCarFuel, largeCarMpg);   // 272.6
vehicleRange(truckFuel, truckMpg);         // 328.9









// Example 3 - With Objects

var smallCar = {
  fuel: 7.8,
  mpg: 37,
};

var largeCar = {
  fuel: 9.4,
  mpg: 29,
};

var truck = {
  fuel: 14.3,
  mpg: 23,
};

function vehicleRange(vehicle) {
  return vehicle.fuel * vehicle.mpg;
}

vehicleRange(smallCar);   // 288.6
vehicleRange(largeCar);   // 272.6
vehicleRange(truck);      // 328.9









// Example 4 - Add Behaviors

var smallCar = {
  fuel: 7.8,
  mpg: 37,
  range: function() {
    return this.fuel * this.mpg
  }
};

smallCar.range();   // 288.6










// Example 5 - Object Factory

function makeVehicle(fuel, mpg) {
  return {
    fuel: fuel,
    mpg: mpg,
    range: function() {
      return this.fuel * this.mpg;
    }
  };
}

var smallCar = makeVehicle(7.8, 37);
smallCar.range();       // 288.6

var largeCar = makeVehicle(9.4, 29);
largeCar.range();       // 272.6

var truck = makeVehicle(14.3, 23);
truck.range();          // 328.9





