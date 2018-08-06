// ------------
// Question #1
// ------------

function makeMultipleLister(num) {
  return function() {
    var i; 

    for (i = num; i < 100; i += num) {
      console.log(i);
    }
  }
}

var lister = makeMultipleLister(13);
lister();










// ------------
// Question #2
// ------------


function makeCalculation(op) {
  return function(num) {
    if (op === 'add') {
      total += num;
    } else if (op === 'subtract') {
      total -= num;
    }

    console.log(total);
  };
}

var add = makeCalculation('add');
var subtract = makeCalculation('subtract')
var total = 0;

add(1);           // 1
add(42);          // 43
subtract(39);     // 4
add(6);           // 10











// ------------
// Question #3
// ------------

function later(func, arg) {
  return function() {
    return func(arg);
  };
}

// Otherwise illegal invocation
function print(str) {
  console.log(str);
}

var logWarning = later(print, 'The system is shutting down!');
logWarning();











// ------------
// Question #4
// ------------

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

var ready = startup();
var systemStatus = // ?

// I don't think you can set the value of systemStatus to that of the inner var status because there is no way to get access to a variable declared and defined within a function without returning it.






