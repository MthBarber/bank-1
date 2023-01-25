const Withdraw = require('../classes/withdraw');

describe('Testing the Withdraw class', () => {
    it('Can create an instance of Withdraw', ()=> {
        const withdraw = new Withdraw(200);
        expect(withdraw.checkAmount()).toBe(200)

    });

    it("Records the date of the creation of the Withdraw", () => {
        const withdraw = new Withdraw(200);        
        expect(withdraw.checkDate()).toEqual(new Date());
    });
})