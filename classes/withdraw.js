class Withdraw {
    constructor(value){
        this.withdrawAmount = value;
        this.date = new Date().toLocaleDateString();
        this.withdraw = true;
        this.previousBalance = null;
        this.currentBalance = null;
    }

    checkAmount(){
        return this.withdrawAmount
    }

    checkDate(){
        return this.date;
    }
}

module.exports = Withdraw;