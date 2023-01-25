class PrintStatement{
    constructor(accountStatement){
        this.statement = accountStatement;
    }

    //Changes format of Date object to DD/MM/YY
    formatDate(dateData){
        return dateData.toLocaleDateString();
    }

    printStatement(){
        // String to be concanated to, to show statement
        let statement = `date || credit || debit || balance \n`
        this.statement.forEach(transaction => {    
            // Conditional added to place debit and credit transactions in different places  
                        
             if (transaction.checkTransactionType() === "deposit"){
                 statement += `${this.formatDate(transaction.checkDate())} || ${transaction.checkAmount().toFixed(2)} || || ${transaction.showBalance().toFixed(2)} \n`
             }else if (transaction.checkTransactionType() === "withdraw"){
                 statement += `${this.formatDate(transaction.checkDate())} || || ${transaction.checkAmount().toFixed(2)} || ${transaction.showBalance().toFixed(2)} \n`
             }
         })
         
         return statement;
     }
}

module.exports = PrintStatement;