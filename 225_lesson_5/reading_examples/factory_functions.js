// Example 1 - Factory Object Creation Pattern

function createPerson(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.fullName = function() {
    return (this.firstName +  ' ' + this.lastName).trim();
  }

  return person;
}


var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName();      // John Doe
jane.fullName();      // Jane












// Example 2 - Object Literal

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName || '',
    fullName: function() {
      return (this.firstName + ' ' + this.lastName).trim();
    }
  };
}



