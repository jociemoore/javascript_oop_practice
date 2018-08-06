// Example 1

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.__proto__ === foo;        // true











// Example 2

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
Object.getPrototypeOf(bar) === foo;     // true
foo.isPrototypeOf(bar);                 // true













// Example 3

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

Object.getPrototypeOf(qux) === baz;   // true
Object.getPrototypeOf(baz) === bar;   // true
Object.getPrototypeOf(bar) === foo;   // true

foo.isPrototypeOf(qux);               // true











// Example 4

var foo = {
  a: 1,
  b: 2,
};


Object.getPrototypeOf(foo) === Object.prototype;        // true












// Question 1

var prot = {};

var foo = Object.create(prot);








// Question 2

Object.getPrototypeOf(foo) === prot;









// Question 3

prot.isPrototypeOf(foo);









// Question 4

var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo);
// This line will return true because 'prot' is the prototype object that is returned by 'Object.create()' and assigned to 'foo'.

Object.prototype.isPrototypeOf(foo);
// This line will return true because of the prototype chain. 'prot' is a prototype of 'foo' and because 'prot' is not created from any other objects, its prototype is 'Object.prototype'.




