// ------------
// Question #1
// ------------

function func() {
  return this;
}

var context = func();

console.log(context);

// logs: 
// Window {external: Object, chrome: Object, document: document, context: Window, speechSynthesis: SpeechSynthesis…}









// ------------
// Question #2
// ------------

var o = {
  func: function() {
    return this;
  }
};

var context = o.func();

console.log(context);

// logs: Object {}
// The context of func() is determined at execution time. Here the function is called as a method on the object referenced by o. Therefore Object is returned by the function and assigned to context, which is in turn logged to the console.









// ------------
// Question #3
// ------------

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

var foo = {
  message: "Hello from the function scope!"
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();


// logs: 
// "Hello from the global scope!"
// "Hello from the function scope!''











// ------------
// Question #4
// ------------

var a = 10;
var b = 10;
var c = {
  a: -10,
  b: -10
};
function add() {
  return this.a + b;
}

c.add = add;

console.log(add());
console.log(c.add());

// logs:
// 20
// 0










// ------------
// Question #5
// ------------

// call() and apply() allow us to explicitly specify what a function's execution context should be.










// ------------
// Question #6
// ------------

var foo = {
  a: 1,
  b: 2
};

var bar = {
   a: "abc",
   b: "def",
   add: function() {
     return this.a + this.b;
   }
};

bar.add.call(foo);          // 3











// ------------
// Question #7
// ------------

var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: "A Collection of Fruit"
}


function outputList() {
  console.log(this.title + ':');

  var args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);
// apply is better than call in this case because you don't have to pass in the arguments on but one but the containing array with apply instead.










// ------------
// Question #8
// ------------

// In the problem above, call is invoked in this line: 
// var args = [].slice.call(arguments);
// This is because slice cannot be used on 'arguments' directly. It is array-like but not an array meaning that you can access data with bracket notation but you cannt call any array methods.




