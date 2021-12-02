function getValues(){
    // grab all user inputs
    let loanAmount = document.getElementById("loanAmount").value;
    let payments = document.getElementById("payments").value;
    let interest = document.getElementById("interest").value;

    
    let monthly = monthlyPayments(loanAmount,payments,interest)
     monthly = monthly.toFixed(2);
    display(loanAmount,monthly);

}

function monthlyPayments(loanAmount,payments,interest){
   
    let payment = loanAmount * (interest/1200)/(1 - Math.pow((1 + interest/1200), -payments));
    return payment;
}

function display(loanAmount,payment,c){
    // shows total principal
 document.getElementById("totalPrincipal").innerHTML= `$ ${loanAmount}`;
 document.getElementById("monthlyPayment").innerHTML= `$ ${payment}`;
 

}


