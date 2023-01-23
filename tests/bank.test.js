const Bank = require('../classes/bank');
const Deposit = require('../classes/deposit');
const Withdraw = require('../classes/withdraw');

describe('Testing for the Bank class', ()=> {
    it("Creates an instance of bank with 0 balance", () => {
        const bank = new Bank;
        expect(bank.checkBalance()).toBe(0);
    });

    it("Creates an instance of bank with 10 balance", () => {
        const bank = new Bank(10);
        expect(bank.checkBalance()).toBe(10);
    });

    it('Create an instance of bank that accepts a deposit', ()=> {
        const bank = new Bank;
        const deposit = {
            checkAmount(){
                return 200;
            }
        }
        bank.newDeposit(deposit);
        expect(bank.checkBalance()).toBe(200);
    });

    it('Create an instance of bank that accepts a withdrawal', ()=> {
        const bank = new Bank(200);
        const withdraw = {
            checkAmount(){
                return 150;
            }
        }
        bank.newWithdrawal(withdraw.checkAmount());
        expect(bank.checkBalance()).toBe(50);
    });
    //Integration tests
    it("Can work with an instance of the Deposit class", ()=> {
        const bank = new Bank;
        const deposit = new Deposit(200);
        bank.newDeposit(deposit)
        expect(bank.checkBalance()).toBe(200);
    });

    it("Can print out the statement with a single deposit", ()=> {
        const bank = new Bank;
        const deposit = new Deposit(200);
        bank.newDeposit(deposit)
        expect(bank.printStatement()).toEqual(expect.stringContaining('200'));
    });

    it("Can work with an instance of the Withdraw class", ()=> {
        const bank = new Bank;
        const deposit = new Withdraw(200);
        bank.newDeposit(deposit)
        expect(bank.checkBalance()).toBe(200);
    });

    it("Can print out the statement with a single deposit", ()=> {
        const bank = new Bank;
        const deposit = new Deposit(200);
        bank.newDeposit(deposit)
        expect(bank.printStatement()).toEqual(expect.stringContaining('200'));
    });
})