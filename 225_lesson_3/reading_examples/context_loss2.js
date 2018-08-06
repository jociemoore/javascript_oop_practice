// Example 1 - context is lost with internal functions

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  }
};

obj.foo();      // undefined undefined










// Example 2 - preserve context with 'self' or 'that' var

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }
    bar();
  }
};

obj.foo();        // hello world













// Example 3 - pass context to internal function with call or apply

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
  }

  bar.call(this);
}

obj.foo();        // hello world











// Example 4 - bind context with function expression

obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    bar();
  }
};

obj.foo();        // hello world








