// ------------
// Question #1
// ------------

// bind() is used to permanently bind a function to a particular execution context.









// ------------
// Question #2
// ------------

var obj = {
  message: "JavaScript"
}

function foo() {
  console.log(this.message);
}

foo.bind(obj);

// does not log anything -- returns a new function instead 









// ------------
// Question #3
// ------------

var a = 1;
var b = -1;
var obj = {
  a: 2,
  b: 3
};

function foo() {
  return this.a + this.b;
}

var bar = foo.bind(obj);

console.log(foo());
console.log(bar());

// logs:
// 0
// 5










// ------------
// Question #4
// ------------

var positiveMentality = {
  message: "JavaScript makes sense!"
};

var negativeMentality = {
  message: "JavaScript makes no sense!"
};

function foo() {
  console.log(this.message);
}

var bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage();

// logs: "Javascript makes sense!"









// ------------
// Question #5
// ------------

var obj = { a: 'Amazebulous!' };
var otherObj = { a: "That's not a real word!" };

function foo() {
  console.log(this.a);
}

var bar = foo.bind(obj);

bar.call(otherObj);


// logs: "Amazebulous!"






