// Example 1 - context is lost when passing function as argument

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

var john = {
  firstname: 'John',
  lastname: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstname + ' ' + this.lastname);
    });
  }
};


john.greetings();

// "hello undefined undefined"
// "hello undefined undefined"
// "hello undefined undefined"










// Example 2

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  }
};

obj.foo();

// 1 undefined undefined
// 2 undefined undefined
// 3 undefined undefined












// Example 3 - self solution

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  }
};

obj.foo();

// 1 hello world
// 2 hello world
// 3 hello world










// Example 4 - bind solution

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number){
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  }
};

obj.foo();

// 1 hello world
// 2 hello world
// 3 hello world










// Example 5 - optional thisArg solution

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  }
};

obj.foo();

// 1 hello world
// 2 hello world
// 3 hello world







