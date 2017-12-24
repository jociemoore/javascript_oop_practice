// Example 1 - context is lost when removing from object

var john = {
  firstname: 'John',
  lastname: 'Doe',
  greetings: function() {
    console.log('hello, ' + this.firstname + ' ' + this.lastname)
  }
};

var foo = john.greetings;  // Strips context
foo();

// "hello, undefined undefined"










// Example 2

function repeatThreeTimes(func) {
  func();  // cannot do func.call(john) b/c its out of scope
  func();
  func();
}

function foo() {
  var john = {
    firstname: 'John',
    lastname: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }
  };

  repeatThreeTimes(john.greetings);  //Strips context
}

foo();

// "hello, undefined undefined"
// "hello, undefined undefined"
// "hello, undefined undefined"












// Example 3 - pass context as argument

function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  var john = {
    firstname: 'John',
    lastname: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstname + ' ' + this.lastname)
    }
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// "hello, John Doe"
// "hello, John Doe"
// "hello, John Doe"











// Exmaple 4 - use hard binding if you can't change the function or supply context

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  var john = {
    firstname: 'John',
    lastname: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstname + ' ' + this.lastname)
    }
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();

// "hello, John Doe"
// "hello, John Doe"
// "hello, John Doe"









