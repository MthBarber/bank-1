const BankAccount = require('../classes/bankAccount');
const Deposit = require('../classes/deposit');
const Withdraw = require('../classes/withdraw');

describe('Testing for the Bank class', ()=> {
    it("Creates an instance of bank with 0 balance", () => {
        const bank = new BankAccount;
        expect(bank.checkBalance()).toBe(0);
    });

    it("Creates an instance of bank with 10 balance", () => {
        const bank = new BankAccount(10);
        expect(bank.checkBalance()).toBe(10);
    });

    it("Creates an instance of bank with 8.99 balance", () => {
        const bank = new BankAccount(8.99);
        expect(bank.checkBalance()).toBe(8.99);
    });

    it('Create an instance of bank that accepts a deposit', ()=> {
        const bank = new BankAccount;
        const deposit = {
            checkAmount(){
                return 200;
            },

            setShowBalance(){
               
            }
        }
        bank.newDeposit(deposit);
        expect(bank.checkBalance()).toBe(200);
    });

    it('Create an instance of bank that accepts a withdrawal', ()=> {
        const bank = new BankAccount(200);
        const withdraw = {
            checkAmount(){
                return 150;
            },
            setShowBalance(){

            }
        }
        bank.newWithdrawal(withdraw);
        expect(bank.checkBalance()).toBe(50);
    });


    //Integration tests
    it("Can work with an instance of the Deposit class", ()=> {
        const bank = new BankAccount;
        const deposit = new Deposit(200);
        bank.newDeposit(deposit)
        expect(bank.checkBalance()).toBe(200);
    });

    it("Can work with an instance of the Deposit class with a floating point number", ()=> {
        const bank = new BankAccount;
        const deposit = new Deposit(200.99);
        bank.newDeposit(deposit)
        expect(bank.checkBalance()).toBe(200.99);
    });

    

    it("Can work with an instance of the Withdraw class", ()=> {
        const bank = new BankAccount(400);        
        const withdraw = new Withdraw(200);
        bank.newWithdrawal(withdraw);        
        expect(bank.checkBalance()).toBe(200);
    });

    it("Can work with an instance of the Withdraw class when left with a floating point number", ()=> {
        const bank = new BankAccount(400);        
        const withdraw = new Withdraw(150.99);
        bank.newWithdrawal(withdraw);        
        expect(bank.checkBalance()).toBe(249.01);
    });

    

    it("Can return the correct balance with 2 transactions", ()=> {
        const bank = new BankAccount(400);
        const deposit = new Deposit(200);        
        const withdraw = new Withdraw(150);
        bank.newDeposit(deposit)
        bank.newWithdrawal(withdraw);        
        expect(bank.checkBalance()).toBe(450);
    });

    
})