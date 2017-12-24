// Example 1 - closure for the interface

function makeList() {
  var items = [];

  return function(newItem) {
    var index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      }
    } else { 
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    }
  };
}

var list = makeList();
list('make breakfast');
// make breakfast added!
list();
// make breakfast
list('make breakfast');
// make breakfast removed!
list();
// The list is empty.












// Example 2 - object would be better 

var list = makeList();
list.add('peas');
// peas added!
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn











// Question 1 + 2

function makeList() {
  var items = [];

  var listOptions = {
    items: [],
    add: function (newItem) {
      items.push(newItem);
      console.log(newItem + ' added!');
    },
    remove: function (item) { 
      var index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
    list: function () {
      if (items) {
        items.forEach(function (item) {
          console.log(item);
        });
      } else {
        console.log('The list is empty.');
      }
    },
  };

  return listOptions;
}









// Example 3 - adding a method to an object in a closure 
//             won't work with properties

var list = makeList();
list.clear = function () {
  // items is not accessible here because the closure does not have access to items within makeList().
  // items; --> throws a ReferenceError
  // this.items --> is undefined

  this.items = [];
  console.log("all items deleted!");
};

var list = makeList();
list.add('peas');
// peas added!
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.clear();
// all items deleted!
list.items;
// []











// Example 4 -- INSTEAD you must update the original
//              definition

function makeList() {
  var items = [];

  var listOptions = {
    items: [],
    add: function (newItem) {
      items.push(newItem);
      console.log(newItem + ' added!');
    },
    remove: function (item) { 
      var index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
    clear: function () {
      items = [];
      console.log('all items deleted!');
    },
    list: function () {
      if (items) {
        items.forEach(function (item) {
          console.log(item);
        });
      } else {
        console.log('The list is empty.');
      }
    },
  };

  return listOptions;
}




