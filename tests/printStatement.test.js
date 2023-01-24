const PrintStatement = require('../classes/printStatement');
const BankAccount = require('../classes/bankAccount');
const Deposit = require('../classes/deposit');
const Withdraw = require('../classes/withdraw');

describe("Testing for printStatement class", ()=> {
    it("Can create a statement", ()=> {

        const account = [{
            checkDate(){
                return new Date().toLocaleDateString();
            },

            checkAmount(){
                return 200.00
            },

            showBalance(){
                return 250.00
            },

            checkTransactionType(){
                return "deposit"
            }
        },]


        const statement = new PrintStatement(account);
        expect(statement.printStatement()).toEqual(expect.stringContaining('200.00'));
        expect(statement.printStatement()).toEqual(expect.stringContaining('250.00'));
    });

    //Integration tests

    it("Can print out the statement with a single deposit", ()=> {
        const bank = new BankAccount;
        const deposit = new Deposit(200);
        bank.newDeposit(deposit);
        const statement = new PrintStatement(bank.returnStatement())
        expect(statement.printStatement()).toEqual(expect.stringContaining('200'));
    });

    it("Can print out the statement with a single Withdraw", ()=> {
        const bank = new BankAccount(500.00);
        const withdraw = new Withdraw(200.00);
        bank.newWithdrawal(withdraw);
        const statement = new PrintStatement(bank.returnStatement())
        expect(statement.printStatement()).toEqual(expect.stringContaining('300'));
    });

    it("Can print out a statement with 2 transactions", ()=> {
        const bank = new BankAccount(400);
        const deposit = new Deposit(200);        
        const withdraw = new Withdraw(150);
        bank.newDeposit(deposit)
        bank.newWithdrawal(withdraw);   
        const statement = new PrintStatement(bank.returnStatement())            
        expect(statement.printStatement()).toEqual(expect.stringContaining('24/01/2023 || 200.00 || || 600.00'))
        expect(statement.printStatement()).toEqual(expect.stringContaining('24/01/2023 || || 150.00 || 450.00'));
    });
})