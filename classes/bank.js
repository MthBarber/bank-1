class Bank{
    constructor(amount){
        this.balance = amount || 0;
        this.statement = []

    }

    checkBalance(){
        return this.balance;
    }

    newDeposit(deposit){
        this.balance += deposit.checkAmount();
        this.statement.push(deposit);
    }

    newWithdrawal(withdraw){
        this.balance -= withdraw;
    }

    printStatement(){
       let statement = `date || credit || debit || balance \n`
       this.statement.forEach(transaction => {            
            if (transaction.isADeposit() === true){
                statement += `${transaction.checkDate} || ${transaction.checkDepositAmount} || || ${this.balance} \n`
            }else if (transaction.isAWithdraw === true){
                statement += `${transaction.this.date} || ${transaction.this.depositAmount} || || ${this.balance} \n`
            }
        })
        return statement;
    }
    
}

module.exports = Bank;