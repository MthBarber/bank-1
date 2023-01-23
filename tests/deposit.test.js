const Deposit = require('../classes/deposit');

describe('Testing for the Class deposit', () => {
    it('Can create an instance of deposit', () => {
        const deposit = new Deposit(200);
        expect(deposit.checkAmount()).toBe(200)
    })

    it("Records the date of the creation of the Deposit", () => {
        const deposit = new Deposit(200);        
        expect(deposit.checkDate()).toEqual(new Date);
    });
})