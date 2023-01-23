const Withdraw = require('../classes/withdraw');

describe('Testing the Withdraw class', () => {
    it('Can create an instance of Withdraw', ()=> {
        const withdraw = new Withdraw(200);
        expect(withdraw.amount()).toBe(200)

    })
})