// ------------
// Question #1
// ------------

var chile = {
  name: "The Republic of Chile",
  continent: "South America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var canada = {
  name: "Canada",
  continent: "North America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var southAfrica = {
  name: "The Republic of South Africa",
  continent: "Africa",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}


// Duplication:
// -- presence of a name property (not value)
// -- presence of a continent property (not value)
// -- getDescription function











// ------------
// Question #2
// ------------

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}


var chile = makeCountry("The Republic of Chile", "South America");
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

console.log(chile.getDescription()); // "The Republic of Chile is located in South America."
console.log(canada.getDescription()); // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."











// ------------
// Question #3
// ------------

function makeCountry(name, continent, visited) {
  return {
    name: name,
    continent: continent,
    visited: false,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}










// ------------
// Question #4
// ------------

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    }
  }
}










// ------------
// Question #5
// ------------

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    },
    visitCountry: function() {
      this.visited = true;
    }
  }
}










// ------------
// Question #6
// ------------

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      if (this.visited) {
        return this.name + ' is located in ' + this.continent + '. I have visited ' + this.name + '.';
      } else {
        return this.name + ' is located in ' + this.continent + '. I haven\'t visited ' + this.name + '.';
      }
    },
    visitCountry: function() {
      this.visited = true;
    }
  }
}



console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."




