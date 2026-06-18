document.getElementById("add-money-btn").addEventListener("click", function(){

    // get the bank name 

    const bankName = getInputValue("add-money-bank")
    if(bankName == "Select Bank"){
        alert("Please select a bank");
        return;
    }

    // get bank account number 

    const accountNumber = getInputValue("add-money-number");
    console.log(accountNumber)
    if(accountNumber.length != 11){
        alert("Enter a valid number");
        return;
    }

    // get amount to add 

    const amountAdd = getInputValue("add-money-amount");

    // calculate new balance 

    const newBalance = getBalance() + Number(amountAdd);
    // console.log("new balance = ", newBalance);


    // check pin 

    const pin = getInputValue("add-money-pin")
    if(pin === "1234"){
        alert("Add money successful");
        setBalance(newBalance);

        // transaction history 

        // get history id 
        const history = document.getElementById("history-container");

        // create new div 
        const newHistory = document.createElement("div");

        // add inner html 
        newHistory.innerHTML= `
        <div class="transaction-card p-6 bg-base-100 rounded-2xl">
            Add Money Successful from ${bankName},
            Account Number ${accountNumber},
            ${new Date()}
        </div>
        `;

        // append new div in history 
        history.append(newHistory);


    }

    else{
        alert("Invalid pin");
        return;
    }
})