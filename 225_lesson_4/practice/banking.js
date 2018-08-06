function makeAccount(number) {
  var number = number;
  var balance = 0;
  var transactions = [];

  return {
    getNumber: function() {
      return number;
    },
    getBalance: function() {
      return balance;
    },
    getTransactions: function() {
      return transactions;
    },
    deposit: function (amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount});
     return amount;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      transactions.push({type: 'withdrawal', amount: amount});
      return amount;
    },
  };
}

function makeBank() {
  var accounts = [];

  return {
    openAccount: function() {
      var newAccount = makeAccount(accounts.length + 101);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(account1, account2, amount) {
      account1.withdraw(amount);
      account2.deposit(amount);
      return amount;
    }
  };
};















///////////////////
// TEST CASES
///////////////////


var bank = makeBank();

var account = bank.openAccount();
console.log(account.deposit(20));           // 20
console.log(account.getNumber());           // 101
console.log(account.getBalance());          // 20
console.log(account.getTransactions());     // [Object]

var secondAccount = bank.openAccount();
console.log(secondAccount.getNumber());     // 102

console.log(bank.accounts());               // TypeError













// PREVIOUS TEST CASES


var bank = makeBank();
var source = bank.openAccount();
console.log(source.deposit(10));                        // 10
var destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));     // 7
console.log(source.balance);                            // 3
console.log(destination.balance);                       // 7







var bank = makeBank();
var account = bank.openAccount();
console.log(account.number);          // 101
console.log(bank.accounts);           // [Object]
console.log(bank.accounts[0]);        // Object {number: 101, balance: 0, transactions: Array[0]}
var secondAccount = bank.openAccount();
console.log(secondAccount.number);    // 102








var account = makeAccount();
console.log(account.deposit(15));      // 15
console.log(account.balance);          // 15

var otherAccount = makeAccount();
console.log(otherAccount.balance);     // 0

var bank = makeBank();
console.log(bank.accounts);                         // []








console.log(account.balance);          // 0
console.log(account.deposit(42));      // 42
console.log(account.balance);          // 42

account.deposit(58);
console.log(account.balance);          // 100
console.log(account.withdraw(19));     // 19
console.log(account.balance);          // 81

console.log(account.withdraw(91));     // 81
console.log(account.balance);          // 0

account.deposit(23);                   // 23
console.log(account.transactions);     // [Object]
console.log(account.transactions[0]);  // Object {type: "deposit", amount: 42}








