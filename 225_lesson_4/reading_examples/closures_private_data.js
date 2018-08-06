// Example 1
function makeCounter() {
  var count = 0;
  return function() {
    count += 1;
    console.log(count);
  }
}

var counter = makeCounter();
counter();  // 1
counter();  // 2
counter();  // 3

console.log(count);           // ReferenceError
console.log(counter.count);   // undefined










// Question 1

function makeCounterLogger(limit1) {
  var i;

  return function(limit2) {
    if (limit1 < limit2) {
      for (i = limit1; i <= limit2; i +=1) {
        console.log(i);
      }
    } else {
      for (i = limit1; i >= limit2; i -=1) {
        console.log(i);
      }
    }
  };
}

var countLog = makeCounterLogger(5);
console.log(countLog(8));
console.log(countLog(2));











// Question 2

function makeList() {
  var todos = [];

  return function(task) {
    var index;
    var i;

    if (!task && todos.length === 0) {
      console.log('The list is empty.');
    } else if (!task) {
      for (i = 0; i < todos.length; i += 1) {
        console.log(todos[i] + '\n');
      }
    } else if (todos.includes(task)) {
      index = todos.indexOf(task);
      todos.splice(index, 1);
      console.log(task + ' removed!');
    } else {
      todos.push(task);
      console.log(task + ' added!');
    }
  };
}

var list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book






