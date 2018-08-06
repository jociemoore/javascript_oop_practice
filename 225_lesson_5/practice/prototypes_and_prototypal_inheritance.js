// ------------
// Question #1
// ------------

function getDefiningObject(object, propKey) {
  var isDefinedHere;

  while (object) {
    isDefinedHere = object.hasOwnProperty(propKey);

    if (isDefinedHere) {
      break;
    } else {
      object = Object.getPrototypeOf(object);
    }
  }

  return object;
}

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null












// ------------
// Question #2
// ------------

function shallowCopy(object) {
  var prot = Object.getPrototypeOf(object);
  var properties = Object.getOwnPropertyNames(object);
  var copy = Object.create(prot);

  properties.forEach(function (propName) {
    copy[propName] = object[propName];
  });

  return copy;
}

var foo = {
  a: 1,
  b: 2
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
}

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // c is 3












// ------------
// Question #3
// ------------

function extend(destination) {
  var properties;
  var i;
  var j;

  for (i = 1; i < arguments.length; i += 1) {
    properties = Object.getOwnPropertyNames(arguments[i]);
    for (j = 0; j < properties.length; j += 1) {
      destination[properties[j]] = arguments[i][properties[j]];
    }
  }

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2
  }
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },
  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  }
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // Hello, Joe







