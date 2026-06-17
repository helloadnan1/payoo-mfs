console.log("machine suxes");
// machine for get value from input 

function getInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, "=", value);
    return value;
}

// function getInnerText(id){
//     const input = document.getElementById(id);
//     const value = input.innerText;
//     console.log(id, "=", value);
//     return value;
// }

// machine for get balance 

function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}


// machine for set value in balance 

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// take id to show and hide other sections 

function showOnly(id){
    console.log("show only clicked")
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    const payBill = document.getElementById("pay-bill");

    // hide all elements 

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden")
    payBill.classList.add("hidden");

    // show the clicked element 

    const clicked = document.getElementById(id);
    clicked.classList.remove("hidden");

}