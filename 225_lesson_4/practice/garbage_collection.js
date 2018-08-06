// ------------
// Question #1
// ------------

// Javascript IS a garbage collected language which means variables and objects are automatically cleaned up when the program no longer needs them.









// ------------
// Question #2
// ------------

var myNum = 1;

function foo() {
  var myStr = "A string";
  // what is eligible for GC here? nothing 
  // (this does not seem consistent with reading example Question 1)
}

foo();

// what is eligible for GC here? "A string"

// more code











// ------------
// Question #3
// ------------

var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here? no, the outerFoo's 0 is still accessible

// more code












// ------------
// Question #4
// ------------

function makeEvenCounter() {
  var index = 0;
  return function() {
    return index += 2;
  }
}

var evenCounter = makeEvenCounter();

// is 0 eligible for GC here?
// No, because the closure closes over the value of index and is stored in evenCounter, so a reference to index's 0 still exists.


// more code











// ------------
// Question #5
// ------------

var bash = "Some val";

// Yes, "Some val" will be eligible for GC when there are no references to it or at the end of the program.


