const Bank = require('../classes/bank');

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
        bank.newDeposit(deposit.checkAmount());
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
})