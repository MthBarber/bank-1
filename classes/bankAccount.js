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

    printStatement(){
       let statement = `date || credit || debit || balance \n`
       this.statement.forEach(transaction => {            
            if (transaction.checkTransactionType() === "deposit"){
                statement += `${transaction.checkDate()} || ${transaction.checkAmount().toFixed(2)} || || ${transaction.showBalance().toFixed(2)} \n`
            }else if (transaction.checkTransactionType() === "withdraw"){
                statement += `${transaction.checkDate()} || || ${transaction.checkAmount().toFixed(2)} || ${transaction.showBalance().toFixed(2)} \n`
            }
        })
        console.log(statement)
        return statement;
    }
    
}

module.exports = BankAccount;