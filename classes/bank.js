class Bank{
    constructor(amount){
        this.balance = amount || 0
    }

    newDeposit(deposit){
        this.balance += deposit;
    }

    checkBalance(){
        return this.balance;
    }
}

module.exports = Bank;