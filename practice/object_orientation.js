// ------------
// Question #1
// ------------

var scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
};

var drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
};







// ------------
// Question #2
// ------------

function setPrice(item, price) {
  if (price < 0) {
    console.log('New price is invalid');
  }

  item.price = price;
}









// ------------
// Question #3
// ------------

function describeProduct(item) {
  console.log(
    'Name: ' + item.name + '\n' +
    'ID: ' + item.id + '\n' +
    'Price: $' + item.price + '\n' +
    'Stock: ' + item.stock
  );
}

describeProduct(scissors);












// ------------
// Question #4
// ------------

var scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
  describe: function() {
    console.log(
      'Name: ' + this.name + '\n' +
      'ID: ' + this.id + '\n' +
      'Price: $' + this.price + '\n' +
      'Stock: ' + this.stock
    );
  },
  setPrice: function(price) {
    if (price < 0) {
      console.log('New price is invalid');
    }
  
    item.price = price;
  }
};

var drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  describe: function() {
    console.log(
      'Name: ' + this.name + '\n' +
      'ID: ' + this.id + '\n' +
      'Price: $' + this.price + '\n' +
      'Stock: ' + this.stock
    );
  },
  setPrice: function(price) {
    if (price < 0) {
      console.log('New price is invalid');
    }
  
    this.price = price;
  }
};








// ------------
// Question #5
// ------------

function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    describe: function() {
      console.log(
        'Name: ' + this.name + '\n' +
        'ID: ' + this.id + '\n' +
        'Price: $' + this.price + '\n' +
        'Stock: ' + this.stock
      );
    },
    setPrice: function(price) {
      if (price < 0) {
        console.log('New price is invalid');
      }
    
      this.price = price;
    }
  };
}








// ------------
// Question #6
// ------------

var scissors = createProduct(0, 'Scissors', 8, 10);
var drill = createProduct(1, 'Cordless Drill', 15, 45);
var markers = createProduct(2, 'Permanent Markers', 23, 7);
var measureTape = createProduct(3, 'Measuring Tape', 55, 10);




