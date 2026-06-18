
document.getElementById("cashout-btn").addEventListener("click", function(){

    // get the agent number 

    const agentNumber = getInputValue("cashout-agent");
     if(agentNumber.length != 11){
        alert("Invalid number");
        return;
    }

    // get the amount 

    const cashoutAmount = getInputValue("cashout-amount");

    // get the current balance 

    const currentBalance = getBalance();

    // new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert("Invalid Amount");
        return;

    }


    // get the pin 

    const cashoutPin = getInputValue("cashout-pin");
    if(cashoutPin === "1234"){
        alert("Cashout successfull");
        setBalance(newBalance);
        // document.getElementById("balance").innerText = newBalance;
        console.log(newBalance);

        // transaction history 

        // get history id 
        const history = document.getElementById("history-container");

        // create new div 
        const newHistory = document.createElement("div");

        // add inner html 
        newHistory.innerHTML= `
        <div class="transaction-card p-6 bg-base-100 rounded-2xl">
            Cashout Tk. ${cashoutAmount} Successful to ${agentNumber},
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






// document.getElementById("cashout-btn").addEventListener("click", function(){

//     // get the agent number 
//     const cashoutAgent = document.getElementById("cashout-agent");
//     const agentNumber = cashoutAgent.value;
//     console.log(agentNumber)
//     // if(agentNumber.length != 11){
//     //     alert("Invalid number");
//     //     return;
//     // }

//     // get the amount 
//     const cashoutAmount = document.getElementById("cashout-amount");
//     const amount = cashoutAmount.value;
//     console.log(amount)

//     // get the current balance 
//     const currentBalance = document.getElementById("balance");
//     const balance = currentBalance.innerText;
//     console.log(balance);

//     //new balance
//     const newBalance = Number(balance) - Number(amount);

//     if(newBalance < 0){
//         alert("Invalid");
//         return;

//     }


//     // get the pin 

//     const cashoutPin = document.getElementById("cashout-pin");
//     const pin = cashoutPin.value;

//     if(pin === '1234'){
//         alert("Cashout successful");
//         console.log(newBalance);
//         currentBalance.innerText = newBalance;

//     }

//     else{
//         // alert("Invalid pin");
//         return;
//     }

// })