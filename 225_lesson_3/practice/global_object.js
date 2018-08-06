// ------------
// Question #1
// ------------

// In a browser, the implicit execution context is window.









// ------------
// Question #2
// ------------

a = 10;

console.log(window.a === a);

// logs: true










// ------------
// Question #3
// ------------

function func() {
  var b = 1;
}

func();

console.log(b);

// Throws a ReferenceError











// ------------
// Question #4
// ------------

function func() {
  b = 1;
}

func();

console.log(b);

// logs: 1










// ------------
// Question #5
// ------------

var a = 1;
b = 'Hi there';
var c = '-50';

delete a; // => false
delete b; // => true
delete c; // => false









// ------------
// Question #6
// ------------

function func() {
  console.log("I'm a function!");
}

delete func; // => false









// ------------
// Question #7
// ------------

window.a = 1;
b = 2;
var c = b;

delete window.a; // => true
delete window.b; // => true
delete window.c; // => false






