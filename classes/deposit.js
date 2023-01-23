class Deposit {
    constructor(value){
        this.depositAmount = value;
        this.deposit = true;
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

    

    isADeposit(){
        return this.deposit
    }

    setPreviousBalance(balance){
        this.previousBalance = balance;
    }

    setCurrentBalance(){
        this.previousBalance += this.checkAmount();
    }
}

module.exports = Deposit;