console.log("machine suxes");
// machine for get value from input 

function getInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, "=", value);
    return value;
}

function getInnerText(id){
    const input = document.getElementById(id);
    const value = input.innerText;
    console.log(id, "=", value);
    return value;
}