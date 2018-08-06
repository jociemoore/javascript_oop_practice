// Example 1

var temperatures = [53, 86, 12, 43];

function average(values) {
  var total = 0;
  for (var i = values.length - 1; i >= 0; i--) {
    total += values[i];
  }

  return total / values.length;
}

console.log(average(temperatures));       // 48.5










// Example 2

var temperatures = [53, 86, 12, 43];

function average() {
  var total = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    total += this[i];
  }

  return total / this.length;
}


// this referneces the global scope which is window
console.log(average(temperatures));       // NaN

// change context to temperatures
console.log(average.call(temperatures));  // 48.5
console.log(average.apply(temperatures)); // 48.5

// permanently set context to temperatures
var averageTemperature = average.bind(temperatures);
console.log(averageTemperature());

// define a method in an object
temperatures.average = average;
console.log(temperatures.average());      // 48.5




