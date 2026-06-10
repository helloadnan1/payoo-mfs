console.log("hello adnan");

document.getElementById("login-btn").addEventListener("click", function () {
  console.log("login suucess");
});

document.getElementById("login-btn").addEventListener("click", function () {

  // get mobile number 
  const numberLogin = document.getElementById("login-number");
  const number = numberLogin.value;
  console.log(number);


  // get pin 
  const pinLogin = document.getElementById("login-pin");
  const pin = pinLogin.value;
  console.log(pin);

  // match mobile number and pin 

  if(number== "01234567891" && pin== "1234"){
    alert("login successful");
    window.location.assign("/home.html")
  }

  else{
    alert("login failed");
    return;
  }


});
