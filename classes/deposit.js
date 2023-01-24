class Deposit {
    constructor(value){
        this.depositAmount = value;
        this.transactionType = "deposit";
        this.date = new Date().toLocaleDateString();
        this.balance = null;
        // this.currentBalance = null;
    }

    checkAmount(){
        return this.depositAmount;
    }

    checkDate(){
        return this.date
    }
    

    checkTransactionType(){
        return this.transactionType;
    }

    setCurrentBalance(){
        this.previousBalance += this.checkAmount();
    }

    setShowBalance(balance){
        this.balance = balance;
    }

    showBalance(){
        return this.balance;
    }
}

module.exports = Deposit;