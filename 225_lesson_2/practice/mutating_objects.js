// ------------
// Question #1
// ------------

var message = "Hello from the global scope!";

function func(message) {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);

// logs
// Hello from the function scope!
// Hello from the global scope!









// ------------
// Question #2
// ------------

var myObj = { message: "Greetings from the global scope!" };

function func(obj) {
  obj.message = "Greetings from the function scope!";
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

// logs
// Greetings from the function scope!
// Greetings from the function scope!
// This demonstrates that objects are reference types not primitive types; when you change a property of a reference type you change it for all the variable that reference this location in memory.











// ------------
// Question #3
// ------------

var message = "Hello from the global scope!";

function func() {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);


// logs
// Hello from the function scope!
// Hello from the function scope!









// ------------
// Question #4
// ------------

var a = 10;
var obj = {
  a: a
}

var newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);


// logs
// false
// true









// ------------
// Question #5
// ------------

var animal = {
  name: "Pumba",
  species: "Phacochoerus africanus"
};

var menagerie = {
  warthog: animal
};

animal = {
  name: "Timon",
  species: "Suricata suricatta"
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true


// The second to last line logs false because the whole animal variable is reassigned to an  object at a  different location in memory. The old object still exists in its location and this is where menagerie.warthog is pointing still.







