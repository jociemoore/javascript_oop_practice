// Example 1

function change(a) {
  a = 2;
  console.log(a);
}

var b = 1;
change(b);       // logs 2
console.log(b);  // logs 1










// Example 2 

function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

var counter = { count: 0 };
counter                       // { count: 0 };
increment(counter);           // 1
counter                       // { count: 1 }