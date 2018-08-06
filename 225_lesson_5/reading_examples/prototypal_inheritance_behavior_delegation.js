// Example 1

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
var baz = Object. create(bar);

bar.a;      // 1
baz.a;      // 1
baz.c;      // undefined










// Example 2

var foo = {
  hello: function() {
    return 'hello' + this.name;
  }
};

var bar = Object.create(foo);
bar.name = 'world';
bar.hello();            // hello world












// Example 3

var dog = {
  say: function() {
    console.log(this.name + ' says WOOF!');
  },
  run: function() {
    console.log(this.name + ' runs away.');
  }
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say();           // Fido says WOOF!
fido.run();           // Fido runs away.

var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();           // Spot says WOOF!
spot.run();           // Spot runs away.












// Example 4 

var dog = {
  say: function() {
    console.log(this.name + ' says WOOF!');
  }
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says WOOF WOOF!')
}

fido.say();           // Fido says WOOF WOOF!
var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();           // Spot says WOOF!












// Example 5 

var foo = {
  a: 1,
};

var bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
bar.hasOwnProperty('a');                // true
Object.getOwnPropertyNames(bar);        // ['a','b']

bar.hasOwnProperty('c');                // false










// Question 1

var foo = {};
var bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);       // 1









// Question 2

var foo = {};
var bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);         // 2










// Question 3

var boo = {};
boo['myProp'] = 1;

var far = Object.create(boo);

// lots of code

far['myProp']; // 1

// No, we cannot be certain that on the last line we are ultimately referencing a property owned by 'boo'. To check we could use 'far.hasOwnProperty('myProp')' to see if the 'far' object has defined its own 'myProp' property that overrides the 'boo' 'myProp' property higher in the prototype chain.






