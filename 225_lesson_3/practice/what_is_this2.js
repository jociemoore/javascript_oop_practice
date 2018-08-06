// ------------
// Question #1
// ------------

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  }
};

myObject.myChildObject.myMethod();

// 'this' points to myChildObject.
// The code above returns undefined because myChildObject does not have a property 'count'.









// ------------
// Question #2
// ------------

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      var that = myObject;
      return that.count;
    }
  }
};

console.log(myObject.myChildObject.myMethod());











// ------------
// Question #3
// ------------

var person = {
  firstName: "Peter",
  lastName: "Parker",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName +
                " is the Amazing Spiderman!");
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// logs: "Peter Parker is the Amazing Spiderman!"










// ------------
// Question #4
// ------------

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = { a: 3 };
obj.func.call(obj2);


// logs:
// 2
// 1
// 1
// 2
// 3










// ------------
// Question #5
// ------------

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + this.tax - specialDiscount();
  }
};

console.log(computer.total());
// logs: NaN






var computer = {
  price: 30000,
  shipping: 2000,
  tax: 3000,
  specialDiscount: function() {
    if (this.price > 20000) {
      return 1000;
    } else {
      return 0;
    }
  },
  total: function() {
    return this.price + this.shipping + this.tax - this.specialDiscount();
  }
};

console.log(computer.total());
// logs 34000






var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());




