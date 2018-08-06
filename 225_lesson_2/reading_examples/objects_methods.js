// Example 1

var greeter = {
  morning: function() {
    console.log('Good morning!');
  }
};

function evening() {
  console.log('Good evening!');
}


// Method invocation
greeter.morning()

// Function invocation
evening()











// Example 2

var greeter = {
  morning: function() {
    console.log('Good morning!');
  }
}

// Method invocation: executing a method
greeter.morning(); // logs 'Good morning!'

// Create a variable which points at the greeter.morning method
functionGreeter = greeter.morning; //returns [Function: morning]

// Function invocation: executing a function
functionGreeter();  // logs 'Good morning!'











// Example 3
var counter = {
  count: 0,
  advance: function() {
    this.count += 1;
  }
}

counter; // { count:0, advance: [Function] }

counter.advance();
counter; // { count: 1, advance: [Function] }

counter.advance();
counter.advance();

counter; // { count: 3, advance: [Function] }










// Example 4
var car = {
  fuel: 7.8,
  running: false,
  start: function () {
    this.running = true;
  }
};


car
// logs
// {fuel: 7.8, running: false, start: function}
car.start()
car
// logs
// {fuel: 7.8, running: true, start: function}










// Example 5

var car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  }
};

car.stop = function() {
  this.running = false;
}

car.stop()
car
// logs
// {fuel: 7.8, running: false, start: function, stop: function}










// Example 6

var car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  }
};

car.drive = function(distance) {
  this.fuel -= distance / 52;
};

car.drive(139)
car
// logs
// {fuel: 5.126923076923077, running: false, start: function, stop: function, drive: function}






