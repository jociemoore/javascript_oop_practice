// Example 1

function foo() {
  return 'this here is: ' + this;
}

foo();          // "this here is: [Object Window]"









// Example 2

var object = {
  foo: function() {
    return 'this here is: ' + this;
  }
};

object.foo();         // "this here is [object Object]"

bar = object.foo;
bar();               // "this here is: [object Window]"











 // Example 3

 var foo = {
  bar: function() {
    return this;
  }
 }

 foo.bar() === foo;      // true











// Example 4

var foo = {
  bar: function() {
    return this;
  }
}

var baz = foo.bar;

baz() === foo;     // false
baz() === window;  // true










// Example 5

var a = 1;

var object = {
  a: 'hello',
  b: 'world',
}

function foo() {
  return this.a;
}

foo();                    // 1
foo.call(object);         // 'hello'











// Example 6

var strings = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + this.b;
  }
};

var numbers = {
  a: 1,
  b: 2
};

strings.foo.call(numbers);        // 3











// Example 7

var iPad = {
  name: 'iPad',
  price: 40000,
};

var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + 'dollars' + punctuation);
}

printLine.call(iPad, 1, ';');
// "1: iPad, 400 dollars;"
printLine.call(kindle, 2, '.');
// "2: kindle, 300 dollars."




