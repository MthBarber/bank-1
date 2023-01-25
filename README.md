## Specification
# Requirements
You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
# Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# Installing the project

Inside the root folder of Bank-1, run 'npm install' 

If you don't have npm installed, run 'npm install -g npm'

Otherwise you can install these dependencies separately.

# Setup our environment to use node latest version
$ nvm use node


# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run our tests
$ jest

# My Approach

Use individual classes for an action you may use on your Bank Account such as Withdraw or Deposit.
The Bank Account will hold and maintain the actions you've taken which can then be passed to PrintStatement to deliver an overview of your acitivity.

# Structure

I've used classes as I feel these are more suitable because it provides a clear structure for what each asset should do, and it allows me to use several methods within to work with the data it holds and reduce complexity.

# Using this application
You can set up a new Bank Account my entering: 

```
const bank = new BankAccount();
```

If you wish to immediately have money in your account you can put a number value inside the parenthesis such as 200.

You are able to check your balance in your account by entering:

```
bank.checkBalance();
```

Which will return a number value such as 200.

If you wish to make a Deposit or Withdraw action to your account you can use one of the following:

```
const withdraw = new Withdraw(150);
const deposit = new Deposit(200);

```

This will make a new transaction that will need to be passed to your Bank Account like so:

```
bank.newDeposit(deposit);
bank.newWithdrawal(withdraw);

```

You should now be able to see the updated balance of your account: 

```
bank.checkBalance();
```

If you wish to see your Bank Statement and recent transactions, you can do so by doing the following:

```
const statement = new PrintStatement(bank.returnStatement());
statement.printStatement();

```

Which should return all your transactions in a format like this:

```
date || credit || debit || balance
24/01/23 || 200.00|| || 400.00
23/01/23 || || 100.00 || 200.00
```