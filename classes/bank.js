class Bank{
    constructor(amount){
        this.balance = amount || 0
    }

    checkBalance(){
        return this.balance;
    }

    newDeposit(deposit){
        this.balance += deposit;
    }

    newWithdrawal(withdraw){
        this.balance -= withdraw;
    }

    
}

module.exports = Bank;