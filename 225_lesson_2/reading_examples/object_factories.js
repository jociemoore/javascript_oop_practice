// Example - code duplication

var sedan = {
  speed: 0,
  rate: 8,
  accelerate: function() {
    this.speed += this.rate;
  },
};

var coupe = {
  speed: 0,
  rate: 12,
  accelerate: function() {
    this.speed += this.rate;
  },
};


sedan;                // Object {speed: 0, rate: 8}
sedan.accelerate();
sedan;                // Object {speed: 8, rate: 8}

coupe.accelerate();
coupe.speed;          // 12










// Question 1 

function makeCar(rate) {
  return {
    speed: 0,
    rate: rate,
    accelerate: function() {
      this.speed += this.rate;
    }
  }
}

var sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed);          // 8

var coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);          // 12









// Question 2

var hatchback = makeCar(9);










// Question 3
function makeCar(acceleration, deceleration) {
  return {
    speed: 0,
    rateUp: acceleration,
    rateDown: deceleration,
    accelerate: function() {
      this.speed += this.rateUp;
    },
    brake: function() {
      if (this.speed - this.rateDown < 0) {
        this.speed = 0;
      } else {
        this.speed -= this.rateDown;
      }
    }
  }
}


var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);            // 8
sedan.brake();
console.log(sedan.speed);            // 2
sedan.brake();
console.log(sedan.speed);            // 0
