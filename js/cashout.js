
document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const money=document.getElementById("cashout-amount").value;
    const pin=document.getElementById("cashout-pin").value;
    
    if(money!='' && pin ==='123'){
        let totalMoney=document.getElementById("account-blance").innerHTML;
        totalMoney=parseFloat(totalMoney)-parseFloat(money);
        document.getElementById("account-blance").innerHTML=totalMoney;
        
    
    }
    else{
        alert("some issues")
    }
    })