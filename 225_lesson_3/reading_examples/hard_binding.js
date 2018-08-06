// Example 1

var a = 'goodbye';

var object = {
  a:'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  }
};

var bar = object.foo;
bar();                    // 'goodbye undefined'

var baz = object.foo.bind(object);
baz();                    // 'hello world'

var object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object);         // 'hello world'





// Bind Implementation

Function.prototype.bind = function () {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift;

  return function () {
    fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  };
}













// Example 2

var greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    var currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {  
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  } 
};

var spanishWords = {
  morning: 'Buenos días, ',
  afternoon: 'Buenos tardes, ',
  evening: 'Buenas noches, ',
}

var spanishGreeter = greetings.greeting.bind(spanishWords);

console.log(spanishGreeter('Jose'));
console.log(spanishGreeter('Juan'));




