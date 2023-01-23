class Withdraw {
    constructor(value){
        this.withdrawAmount = value;
        this.date = new Date().toLocaleDateString();
        this.transactionType = "withdraw";
        this.previousBalance = null;
        this.currentBalance = null;
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
}

module.exports = Withdraw;