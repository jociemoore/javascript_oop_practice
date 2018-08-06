// Question 1 

// messy code above

for (var i = 0; i < 100; i++) {
  console log(i);
}

// more messy code below

// The problem here is we don't know if variable 'i' conflicts with another variable 'i' in another part of the code.










// Question 2

// messy code above

function loopAndLog() {
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }
}

loopAndLog();

// messy code below

// Variable 'i' is isolated, but here we have created another variable 'loopAndLog' that may be less likely to conflict with previously written code as its name is more unique, but we cannot be sure. 












// Example 1 - use an IIFE to create private scope

// messy code above

(function() {
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }
})();

// messy code below










// Example 2

// messy code above

(function(number) {
  for (var i = 0; i < number; i++) {
    console.log(i);
  }
})(100);

// messy code below




