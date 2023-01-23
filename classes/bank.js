class Bank{
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
        
    }

    newWithdrawal(withdraw){
        this.statement.push(withdraw)               
        this.balance -= (withdraw.checkAmount());
    }

    printStatement(){
       let statement = `date || credit || debit || balance \n`
       this.statement.forEach(transaction => {            
            if (transaction.checkTransactionType() === "deposit"){
                statement += `${transaction.checkDate} || ${transaction.checkDepositAmount} || || ${this.balance} \n`
            }else if (transaction.checkTransactionType() === "withdraw"){
                statement += `${transaction.checkDate} || ${transaction.checkDepositAmount} || || ${this.balance} \n`
            }
        })
        return statement;
    }
    
}

module.exports = Bank;