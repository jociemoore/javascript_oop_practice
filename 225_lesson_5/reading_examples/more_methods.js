// Example 1 - getPrototypeOf()

Object.getPrototypeOf([]) === Array.prototype;    // true

function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() {
  return this[0];
}

var newArr = new NewArray();
var oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);
console.log(newArr.first());        // 5
console.log(typeof oldArr.first);   // undefined











// Example 2 - defineProperties()

var obj = {
  name: 'Obj',
};

Object.defineProperties(obj,  {
  age: {
    value: 30,
    writable: false,
  }
});

console.log(obj.age);         // 30
obj.age = 32;
console.log(obj.age);         // 30













// Question 1

function newPerson(name) {
  var newObj = {
    name: name,
  }

  Object.defineProperties(newObj, {
    log: {
      value: function () { console.log(this.name); },
      writable: false,
    }
  });

  return newObj;
}

var me = newPerson('Shane Riley');
me.log();     // Shane Riley
me.log = function() { console.log("Amanda Rose"); };
me.log();     // Shane Riley












// Example 3 - freeze()

var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar',
  },
  func: function() {
    console.log('I\'m frozen');
  }
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);        // 4
console.log(frozen.string);         // String
console.log(frozen.array);          // [1, 2] !!!
console.log(frozen.object.foo);     // baz !!!
console.log(frozen.func);           // I'm frozen









// Question 2

// The array and object properties are changed but the method is not because the freeze method can only affect non-objects. With objects the references are frozen, but you can still mutate the actual objects the references point to.







