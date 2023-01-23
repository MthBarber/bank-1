class Withdraw {
    constructor(value){
        this.withdrawAmount = value;
        this.date = new Date;
        this.withdraw = true;
    }

    checkAmount(){
        return this.withdrawAmount
    }

    checkDate(){
        return this.date;
    }
}

module.exports = Withdraw;