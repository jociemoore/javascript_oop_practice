// ------------
// Question #1
// ------------

// The two principle disadvantages of working with factory functions are:
//    1) every object has a full copy of the methods, which is redundant
//    2) you cannot inspect an object and know it was made from a Factory function, which makes it difficult to know if an object is a specific 'type'.











// ------------
// Question #2
// ------------

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}










// ------------
// Question #3
// ------------

// var invoice = {
//   phone: 3000,
//   internet: 6500
// };
// var payment = {
//   phone: 1300,
//   internet: 5500
// };
// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // 6800
// console.log(remainingDue);         // 2700





function createInvoice(services) {
  var invoice = {};

  if (services !== undefined) {
    if (services.phone !== undefined) {
      invoice.phone = services.phone;
    } else {
      invoice.phone = 3000;
    }

    if (services.internet !== undefined) {
      invoice.internet = services.internet;
    } else {
      invoice.internet = 5500;
    }
  } else {
    invoice.phone = 3000;
    invoice.internet = 5500;
  }

  invoice.total = function () {
    return this.phone + this.internet;
  }

  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
 internet: 6500
}));

invoices.push(createInvoice({
 phone: 2000
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500
}));

console.log(invoiceTotal(invoices));             // 31000











// ------------
// Question #4
// ------------

function createPayment(services) {
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total: function() {
      return this.amount || this.phone + this.internet;
    },
  }
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500
}));

payments.push(createPayment({
  phone: 2000
}));

payments.push(createPayment({
  phone: 1000, internet: 4500
}));

payments.push(createPayment({
  amount: 10000
}));

console.log(paymentTotal(payments));      // 24000















// ------------
// Question #5
// ------------

function createInvoice(services) {
  services = services || {};

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    paidPhone: 0,
    paidInternet: 0,
    paidAmount: 0,
    total: function() {
      return this.phone + this.internet;
    },
    paidTotal: function() {
      return this.paidPhone + this.paidInternet + this.paidAmount;
    },
    addPayment: function (payment) {
      this.paidPhone += payment.phone || 0;
      this.paidInternet += payment.internet || 0;
      this.paidAmount += payment.amount || 0;
    },
    addPayments: function (payments) {
      var i;
      for (i = 0; i < payments.length; i += 1) {
        this.addPayment(payments[i]);
      }
    },
    amountDue: function () {
      return this.total() - this.paidTotal();
    },
  }
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});

invoice.addPayment(payment1)
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0




