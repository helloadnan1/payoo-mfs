document.getElementById("cashout").addEventListener("click", function(){

    // get the agent number 
    const cashoutAgent = document.getElementById("cashout-agent");
    const agentNumber = cashoutAgent.value;
    console.log(agentNumber)
    // if(agentNumber.length != 11){
    //     alert("Invalid number");
    //     return;
    // }

    // get the amount 
    const cashoutAmount = document.getElementById("cashout-amount");
    const amount = cashoutAmount.value;
    console.log(amount)

    // get the current balance 
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;
    console.log(balance);

    //new balance
    const newBalance = Number(balance) - Number(amount);

    if(newBalance < 0){
        alert("Invalid");
        return;

    }


    // get the pin 

    const cashoutPin = document.getElementById("cashout-pin");
    const pin = cashoutPin.value;

    if(pin === '1234'){
        alert("Cashout successful");
        console.log(newBalance);
        currentBalance.innerText = newBalance;

    }

    else{
        // alert("Invalid pin");
        return;
    }

})