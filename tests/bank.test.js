const Bank = require('../classes/bank');

describe('Testing for the Bank class', ()=> {
    it('Create an instance of bank that accepts a deposit', ()=> {
        const bank = new Bank
        const deposit = {
            checkAmount(){
                return 200
            }
        }
        bank.newDeposit(deposit.checkAmount())
        expect(bank.checkBalance()).toBe(200)
    })
})