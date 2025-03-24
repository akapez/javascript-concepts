//Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    depositMoney(amount) {
        this.balance += amount;
        console.log(`You deposit $${amount} and balance is $${this.balance} in ACC-${this.accountNumber}`);
    }

    withDraw(amount) {
        if (amount > this.balance) {
            console.log('insufficient balance');
            return;
        }
        this.deposit -= amount;
        console.log(`You withdraw $${amount} and balance is $${this.balance} in ACC-${this.accountNumber}`);
    }
}

const account = new BankAccount("001256784");
account.depositMoney(100);
account.depositMoney(150);
account.withDraw(500);