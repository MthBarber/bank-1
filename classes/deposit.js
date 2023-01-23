class Deposit {
    constructor(value){
        this.depositAmount = value;
    }

    checkAmount(){
        return this.depositAmount;
    }
}

module.exports = Deposit;