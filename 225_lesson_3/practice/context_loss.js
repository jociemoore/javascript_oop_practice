// ------------
// Question #1
// ------------

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// logs: undefined undefined is a undefined.
// The reason the actual output differs from the desired output is because the context is lost when turk.getDescription is passed as an argument to logReturnVal. this references the global scope and there are no variables firstName, lastName, and occupation in the global scope.











// ------------
// Question #2
// ------------

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);











// ------------
// Question #3
// ------------

var turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  var returnVal = func();
  console.log(returnVal);
}

var getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);











// ------------
// Question #4
// ------------

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
}

TESgames.listGames();

// DESIRED OUTPUT:
// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim

// No, the code above will not log the desired outputs because the context is lost when the anonymous function is passed to the forEach() method as an argument. 'this' will reference the global scope (window) instead of the TESgames object. There is no property call seriesTitle and the output will be the following instead:

// undefined Arena
// undefined Daggerfall
// undefined Morrowind
// undefined Oblivion
// undefined Skyrim










// ------------
// Question #5
// ------------

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    var self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
}

TESgames.listGames();












// ------------
// Question #6
// ------------

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: "The Elder Scrolls",
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
}

TESgames.listGames();












// ------------
// Question #7
// ------------

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
}

foo.incrementA();
foo.incrementA();
foo.incrementA();

// foo.a = 0











// ------------
// Question #8
// ------------

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
}

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);









// ------------
// Question #9
// ------------

var foo = {
  a: 0,
  incrementA: function() {
    var addByThree = function increment() {
      this.a += 3;
    }.bind(this);

    addByThree();
  }
}

foo.incrementA();
console.log(foo.a);


