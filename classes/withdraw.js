class Withdraw {
    constructor(value){
        this.withdrawAmount = value;
        this.date = new Date();
        this.transactionType = "withdraw";        
        this.balance = null;
    }

    checkAmount(){
        return this.withdrawAmount;
    }    

    checkDate(){
        return this.date;
    }

    checkTransactionType(){
        return this.transactionType;
    }
    setShowBalance(balance){
        this.balance = balance;
    }

    showBalance(){
        return this.balance;
    }
}

module.exports = Withdraw;