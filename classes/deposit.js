class Deposit {
    constructor(value){
        this.depositAmount = value,
        this.deposit = true,
        this.date = new Date
    }

    checkAmount(){
        return this.depositAmount;
    }

    checkDate(){
        return this.date
    }
}

module.exports = Deposit;