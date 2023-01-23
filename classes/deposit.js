class Deposit {
    constructor(value){
        this.depositAmount = value;
        this.transactionType = "deposit";
        this.date = new Date().toLocaleDateString();
        this.previousBalance = null;
        this.currentBalance = null;
    }

    checkAmount(){
        return this.depositAmount;
    }

    checkDate(){
        return this.date
    }

    checkDepositAmount(){
        return this.depositAmount;
    }

    

    checkTransactionType(){
        return this.transactionType;
    }

    setPreviousBalance(balance){
        this.previousBalance = balance;
    }

    setCurrentBalance(){
        this.previousBalance += this.checkAmount();
    }
}

module.exports = Deposit;