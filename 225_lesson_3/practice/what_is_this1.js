// ------------
// Question #1
// ------------

function whatIsMyContext() {
  return this;
}

// It is unknown what 'this' points to until the function is invoked.








// ------------
// Question #2
// ------------


function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// 'this' points to the global object, which is 'window' when the function is called in the browser like it is here.









// ------------
// Question #3
// ------------

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();

// 'this' points to the global object, which is 'window' when the function is called in the browser like it is here.










// ------------
// Question #4
// ------------

var obj = {
  count: 2,
  method: function() {
    return this.count;
  }
};

obj.method();


// 'this' points to the 'obj' Object








// ------------
// Question #5
// ------------

function foo() {
  console.log(this.a);
}

var a = 2;
foo();


// logs: 2






// ------------
// Question #6
// ------------

var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar
};

obj.foo();


// logs: 2








// ------------
// Question #7
// ------------

foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  }
};

foo.bar();
var qux = foo.bar;
qux();


// Object {a: 1}
// TypeError - this.baz is not a function


