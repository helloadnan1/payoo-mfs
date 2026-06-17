document.getElementById("pay-bill-btn").addEventListener("click", function(){

    // get the pay bill type 

    const payType = getInputValue("pay-type")
    if(payType == "Select back"){
        alert("Please select a type");
        return;
    }

    // get biller account number 

    const accountNumber = getInputValue("pay-biller");
    console.log(accountNumber)
    if(accountNumber.length != 11){
        alert("Enter a valid number");
        return;
    }

    // get amount to pay

    const amountPay = getInputValue("pay-amount");

    // calculate new balance 

    const newBalance = getBalance() - Number(amountPay);
    if(newBalance < 0){
        alert("Not enough balance");
        return;
    }
    // console.log("new balance = ", newBalance);


    // check pin 

    const pin = getInputValue("pay-pin")
    if(pin === "1234"){
        alert("Bill pay successful");
        setBalance(newBalance);
        console.log("New balance =", newBalance);
    }

    else{
        alert("Invalid pin");
        return;
    }
})