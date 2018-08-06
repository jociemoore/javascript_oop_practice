// Example 1

var moreFoo = 3;

function bar() {
  return 1;
}

console.log(window.moreFoo);     // 3
console.log(window.bar);         // function bar() { return 1; }










// Example 2

function bar() {
  return 1;
}


var moreFoo = 3;
moreBar = 2;

console.log(delete window.bar);         // false
console.log(delete window.moreFoo);     // false
console.log(delete window.moreBar);     // true

console.log(window.bar());              // 1
console.log(window.moreFoo);            // 3
console.log(window.moreBar);            // undefined