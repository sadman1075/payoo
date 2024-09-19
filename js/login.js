document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();// aita always dite hobe 
    console.log("clicked")
    const phoneNumber=document.getElementById("phone")
    const pinNumber=document.getElementById("pin")
    console.log(pinNumber.value)
    console.log(phoneNumber.value)
})