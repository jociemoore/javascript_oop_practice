// ------------
// Question #1
// ------------

// Higher order functions:
// - accept a function as an argument 
// - return a function when invoked









// ------------
// Question #2
// ------------

var numbers = [1, 2, 3, 4];

function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // (2) [2, 4]

// filter() is the higher order function because it takes the function checkEven as an argument.











// ------------
// Question #3
// ------------

var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(num) {
    return num % 2 === 0;
  }
}

var checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // (2) [2, 4]











// ------------
// Question #4
// ------------

function execute(func, operand) {
  return func(operand);
}

console.log(execute(function(number) {
  return number * 2;
}, 10)); // 20

console.log(execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy')); // HEY THERE BUDDY












// ------------
// Question #5
// ------------

function makeListTransformer(func) {
  return function(array) {
    return array.map(func);
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]



