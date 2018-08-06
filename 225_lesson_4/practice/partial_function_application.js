// ------------
// Question #1
// ------------

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

console.log(sub5(10)); // 5










// ------------
// Question #2
// ------------

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(m) {
    return subtract(m, n);
  }
}

var sub5 = makeSubN(5);
console.log(sub5(10)); // 5









// ------------
// Question #3
// ------------

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500











// ------------
// Question #4
// ------------

// The closure in question 3 is what retains access to the 'func' and 'b' long after 'makePartialFunc' has finished execution.










// ------------
// Question #5
// ------------

var subjects = {
  "English": ["Bob", "Tyrone", "Lizzy"],
  "Math": ["Fatima", "Gary", "Susan"],
  "Biology": ["Jack", "Sarah", "Tanya"]
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall("Math", students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects["Math"]);
// Math:
// Fatima
// Gary
// Susan







// Partial function application perhaps could be more useful here to mark the day's attendence for each class -- we would need to change the problem a bit.

  var record = {
    "English": {"Bob": 'absent', "Tyrone": 'absent', "Lizzy": 'absent'},
    "Math": {"Fatima": 'absent', "Gary": 'absent', "Susan": 'absent'},
    "Biology": {"Jack": 'absent', "Sarah": 'absent', "Tanya": 'absent'}
  };


function markPresent(studentsPresent, subject) {
  studentsPresent.forEach(function(student) {
    record[subject][student] = 'here';
  });
  console.log(record['Math']);
}

function rollCall(subject) {
  return function(studentsPresent) {
    return markPresent(studentsPresent, subject);
  }
}

var mathRollCall = rollCall('Math');
mathRollCall(["Fatima", "Susan"]);
// {"Fatima": 'here', "Gary": 'absent', "Susan": 'here'}


