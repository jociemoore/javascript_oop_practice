var me = {
  firstname: 'Jocie',
  lastname: 'Moore',
};

var friend = {};
friend.firstname = 'John';
friend.lastname = 'Smith';

var mother = {
  firstname: 'Mamma',
  lastname: 'Moore',
}

var father = {
  firstname: 'Papa',
  lastname: 'Moore',
}

var people = {
  collection: [me, friend, mother, father],
  lastIndex: 0,
  fullName: function(person) {
    console.log(person.firstname + ' ' + person.lastname);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return; 
    }

    this.lastIndex += 1;
    this.collection.push(person);
  },
  isInvalidPerson: function(person) {
    return typeof person.firstname !== 'string' && typeof person.lastname !== 'string';
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },
  getIndex: function(person) {
    var index = -1;
    
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstname === person.firstname && comparator.lastname === person.lastname) {
        index = i;
      }
    });

    return index;
  },
  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },
  update: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(index);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

people.rollCall();
console.log(people.getIndex(friend));   // 1
people.remove(friend);
console.log(people.getIndex(friend));   // -1
people.add(friend);
people.add(friend);
