// Example 1 - function passed as argument

[1, 2, 3, 4].forEach(function(number) {
  console.log(number);
});








// Example 2 - functions that return functions 

function helloFactory() {
  return function() {
    console.log('hi');
  }
}


helloFactory(); 
// function {...}

helloFactory()();
// hi (immediate function invocation)

var hello = helloFactory();
hello();
// hi











// Example 3

function timed(func) {
  return function() {
    var start = new Date();
    func();
    var stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  }
}

var timedHi = timed(function() {console.log('hi'); });
// function() {...}

timedHi();
// hi
// 0 ms have elapsed


function loopy() {
  var sum = 0;
  for (var i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log(sum);
}


loopy();
// 499999999067109000

timed(loopy)();
// 499999999067109000
// 952 ms have elapsed


var timedLoopy = timed(loopy);
timedLoopy();
// 499999999067109000
// 955 ms have elasped








