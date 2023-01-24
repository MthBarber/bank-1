class BankAccount{
    constructor(amount){
        this.balance = amount || 0.00;
        this.statement = []

    }

    checkBalance(){
        return this.balance;
    }

    newDeposit(deposit){
        this.statement.push(deposit);        
        this.balance += deposit.checkAmount();        
        deposit.setShowBalance(this.balance);
        
    }

    newWithdrawal(withdraw){
        this.statement.push(withdraw);                       
        this.balance -= (withdraw.checkAmount());        
        withdraw.setShowBalance(this.balance);
    }

    
    returnStatement(){
        return this.statement;
    }
    
}

module.exports = BankAccount;