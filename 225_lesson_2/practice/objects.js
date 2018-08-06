// ------------
// Question #1
// ------------

var invoices = {
  unpaid: [],
};







// ------------
// Question #2
// ------------

var invoices = {
  unpaid: [],
  add: function(name, amount) {
    var lender = {
      'name': name,
      'amount': amount,
    }

    this.unpaid.push(lender);
  },
};








// ------------
// Question #3
// ------------


var invoices = {
  unpaid: [],
  add: function(name, amount) {
    var lender = {
      name: name,
      amount: amount,
    }

    this.unpaid.push(lender);
  },
  totalDue: function() {
    var total = 0;
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i]['amount'];
    }

    return total;
  },
};









// ------------
// Question #4
// ------------


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());








// ------------
// Question #5
// ------------

var invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    var lender = {
      name: name,
      amount: amount,
    }

    this.unpaid.push(lender);
  },
  payInvoice: function (name) {
    var stillUnpaid = [];
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i]);
      } else {
        stillUnpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = stillUnpaid;
  },
  totalDue: function() {
    var total = 0;
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i]['amount'];
    }

    return total;
  },
};










// ------------
// Question #6
// ------------

var invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    var lender = {
      name: name,
      amount: amount,
    }

    this.unpaid.push(lender);
  },
  payInvoice: function (name) {
    var stillUnpaid = [];
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i]);
      } else {
        stillUnpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = stillUnpaid;
  },
  totalDue: function() {
    var total = 0;
    var i;

    for (i = 0; i < this.unpaid.length; i += 1) {
      total += this.unpaid[i]['amount'];
    }

    return total;
  },
  totalPaid: function() {
    var total = 0;
    var i;

    for (i = 0; i < this.paid.length; i += 1) {
      total += this.paid[i]['amount'];
    }

    return total;
  },
};









// ------------
// Question #7
// ------------


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

