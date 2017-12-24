// Example 1 

(function() {
  console.log('hello');
})();                     // hello







// Example 2 - Bad syntax (no outer parentheses)

function() {
  console.log('hello');
}();                       // SyntaxError








// Example 3

(function(a) {
  return a + 1;
})(2);                     // 3









// Example 4 - alternative syntax (last parentheses inside outer parentheses)

(function() {
  console.log('hello');
}());








// Example 5 - omitted outer parentheses when IIFE is a function expression that doesn't occur at the beginning of a line

var foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo);            // 10


