
document.getElementById("transfer-btn").addEventListener("click", function(){

    // get the account number 

    const accountNumber = getInputValue("user-account");
     if(accountNumber.length != 11){
        alert("Invalid number");
        return;
    }

    // get the amount 

    const transferAmount = getInputValue("transfer-amount");

    // get the current balance 

    const currentBalance = getBalance();

    // new balance
    const newBalance = currentBalance - Number(transferAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert("Invalid Amount");
        return;

    }


    // get the pin 

    const pin = getInputValue("transfer-pin");
    if(pin === "1234"){
        alert("Money transfer successfull");
        setBalance(newBalance);
        // document.getElementById("balance").innerText = newBalance;
        console.log(newBalance)
    }

    else{
        alert("Invalid pin");
        return;
    }


})






