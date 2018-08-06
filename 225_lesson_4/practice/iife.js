// ------------
// Question #1
// ------------

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// This code will throw a syntax error; the iffe cannot execute because it needs another set of parentheses when the function expression is a the beginning of a line.










// ------------
// Question #2
// ------------

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();









// ------------
// Question #3
// ------------

var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers); 
// TypeError: sum is not a function


// This code highlights the issue with conflicting variable names.






// Fix:

var sum = 0;

sum += 10;
sum += 31;

var numbers = [1, 7, -3, 3];

sum += function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}(numbers);     // 49

console.log(sum);












// ------------
// Question #4
// ------------

var countdown = function(n) {
  var i;

  for (i = n; i >= 0; i -= 1) {
    console.log(i);
  }
  console.log('Done!');
}(7);

// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!











// ------------
// Question #5
// ------------

(function foo() {
  console.log("Bar");
})();

foo() // ReferenceError

// No, the named function is not accessible in the global scope because the IIFE creates a private scope











// ------------
// Question #6
// ------------

function countdown(count) {
  (function decreaseCount(n) {
      if (n >= 0) {
        console.log(n);
        n -= 1;
        decreaseCount(n);
      } else {
        console.log('Done!');
        return;
      }
  })(count);
}

countdown(7);



