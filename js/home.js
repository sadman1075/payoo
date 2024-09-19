document.getElementById("home-btn").addEventListener("click",function(event){
event.preventDefault();
const money=document.getElementById("amount").value;
const pin=document.getElementById("pin").value;
if(money!='' && pin ==='123'){
    alert("money added")
}
else{
    alert("some issues")
}
})