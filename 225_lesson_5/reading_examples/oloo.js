// Example 1 - Object literal

var pointA = {
  x: 30,
  y: 40,

  onXaxis: function() {
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
};

pointA.distanceToOrigin();        // 50
pointA.onXaxis();                 // false
pointA.onYAxis();                 // false












// Example 2 - Pseudo-Classical Pattern

var Point = function(x, y) {      // capitalize constructor name as convention
  this.x = x || 0;                // intialize states with arguments -- set defaults
  this.y = y || 0;
};

Point.prototype.onXaxis = function() {      // add shared behaviors to the constructor's prototype property one by one
  return this.y === 0;
}

Point.prototype.onYAxis = function() {
  return this.x === 0;
}

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

var pointA = new Point(30, 40);       // use new to create new objects
var pointB = new Point(20);

pointA instanceof Point;
pointB instanceof Point;              // use instanceof to check type

pointA.distanceToOrigin();            // 50
pointB.onXaxis();                     // true











// Example 3 -- OLOO Pattern 

var Point = {                           // capitalize name for prototype as a convention -- default value defined on prototype
  x: 0,
  y: 0,

  onXaxis: function() {                 // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.y === 0;
  },

  distanceToOrigin: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {                // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  }
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point).init(20);

Point.isPrototypeOf(pointB);            // use isPrototypeOf to check type
Point.isPrototypeOf(pointA);

pointA.distanceToOrigin();              // 50
pointB.onXaxis();                       // true


