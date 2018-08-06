// Example 1

function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  }
}

var helloSteve = makeHello("Steve");
console.log(helloSteve());      // "Hello, Steve!"

helloSteve = null;        // remove explicitly












// Example 2

function makeHello(name) {
  var message = "Hello, " + name + "!";
  return function() {
    console.log(message);
  }
}

var helloSteve = makeHello("Steve");












// Question 1

var a = 34;

function add(b) {
  a += b;
} // GC: 'b' is eligible when add() returns

function run() {
  var c = add(4);
} // GC: 'c' is elibigle when run() returns

run();
// GC: 'a' is eligible











// Question 2

function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  }
}

var helloSteve = makeHello("Steve");

// "Steve" is eligilbe for gagrbage collection at the end of the program OR after "helloSteve" is garbage collected."




