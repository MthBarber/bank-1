class Deposit {
    constructor(value){
        this.depositAmount = value;
        this.transactionType = "deposit";
        this.date = new Date()
        this.balance = null;
        
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

    
    setShowBalance(balance){
        this.balance = balance;
    }

    showBalance(){
        return this.balance;
    }
}

module.exports = Deposit;