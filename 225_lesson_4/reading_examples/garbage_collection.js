// Example 1

function logName() {
  var name = "Sarah";

  console.log(name);
}

logName();
// "Sarah" is now eligible for GC
// more code below









// Example 2

function logName() {
  var name = "Sarah";

  console.log(name);
  return name;
}

var loggedName = logName();
// "Sarah" assigned to loggedName is not eligible for GC
// "Sarah" assigned to name IS eligible for GC
// (There are two "Sarah" strings) 











// Example 3

function logName() {
  var name = {
    firstName: "Sarah"
  };

  console.log(name.firstName);
  return name;
}

var loggedName = logName();
// loggedName var is assigned to the value stored in name which is a reference to the the object literal { firstName: "Sarah" }. The value is NOT eligible for GC as this value is the same value that is assigned to name.



