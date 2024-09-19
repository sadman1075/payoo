document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();// aita always dite hobe 
    
    const phoneNumber=document.getElementById("phone").value;
    const pinNumber=document.getElementById("pin").value;
    if(phoneNumber==='5' && pinNumber==='123'){
        window.location.href="home.html";

    }
    else{
        alert("Your phone no or Pin is incorrect")
    }
})