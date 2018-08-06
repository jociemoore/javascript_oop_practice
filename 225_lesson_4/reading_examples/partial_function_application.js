// Example 1 - add function

function add(first, second) {
  return first + second;
}

add(1, 2);    // 3
add(1, 3015)  // 3016








// Example 2 - always add to one

function addOne(value) {
  return add(1, value);
}









// Example 3 - always add to some number

function makeAddN(addend) {
  return function(number) {
    return add(addend, number);
  }
}

var add1 = makeAddN(1);
add1(1);                    // 2
add1(41);                   // 42

var add9 = makeAddN(9);
add9(1);                    // 10
add9(9);                    // 18










// Example 4 - partial functions

function primary(arg1, arg2) {                 // primary
  // ...
}

function generator(primary, arg1) {            // generator
  return function(arg2) {                      // applicator
    return primary(arg1, arg2);
  }
}

var partialFunction = generator(primary, "Hello");
partialFunction(37.2);                         
// like calling primary("Hello", 37.2);











// Example 5 - new generator for multiply

function multiply(first, second) {
  return first * second;
}

function makeMultiplyN(multiplcand) {
  return function(number) {
    return multiply(multiplcand, number);
  }
}











// Example 6 - more general

function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  var result = '';
  for (var i = 0; i < count; i++) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) {       // pass func AND arg
  return function(arg2) {
    return primary(arg1, arg2);
  }
}


var add1 = partial(add, 1);
add1(2);                                // 3
add1(6);                                // 7
var threeTimes = partial(repeat, 3);
threeTimes('Hello');                    // HelloHelloHello
threeTimes('!');                        // !!!












// Question 1

function greet(str1, str2) {
  str1 = str1[0].toUpperCase() + str1.slice(1);
  console.log(str1 + ', ' + str2 + '!');
}

greet("howdy", "Joe");
greet("good morning", "Sue");













// Question 2

function greet(str1, str2) {
  str1 = str1[0].toUpperCase() + str1.slice(1);
  console.log(str1 + ', ' + str2 + '!');
}

function partial(primary, arg1) {       // pass func AND arg
  return function(arg2) {
    return primary(arg1, arg2);
  }
}

var sayHello = partial(greet, "Hello");
sayHello("Brandon");

var sayHi = partial(greet, "Hi");
sayHi("Sarah");



