
// loanAmount = user input, how much the loan is for
// numberOfPayments = user input, how many of payments will be made in terms of months
// interestRate
// monthlyPayment = displays how much the monthly payment will be
// totalPrincipal = displays loan amount ("principal amount")
// totalInterest = displays the total interest that will be accumulated 
// totalCost = displays the total cost of the loan including interest
// 
// 






function getValues(){
    // grab all user inputs
    let loanAmount = document.getElementById("loanAmount").value;
    let numberOfPayments = document.getElementById("numberOfPayments").value;
    let interestRate = document.getElementById("interestRate").value;

    
    let monthlyPaymentAmount = monthlyPayment(loanAmount,numberOfPayments,interestRate);
     monthlyPaymentAmount = monthlyPaymentAmount.toFixed(2);

     let totalCostAmount = totalCost(monthlyPaymentAmount,numberOfPayments); 
     totalCostAmount = totalCostAmount.toFixed(2);

    let totalInterestAmount = totalInterest(totalCostAmount,loanAmount);
    totalInterestAmount = totalInterestAmount.toFixed(2);

    display(monthlyPaymentAmount,loanAmount,totalInterestAmount,totalCostAmount);
    

}

function monthlyPayment(loanAmount,numberOfPayments,interestRate){
//    formula calculates how much the monthly payments will be
    let monthlyPaymentAmount = loanAmount * (interestRate/1200)/(1 - Math.pow((1 + interestRate/1200), - numberOfPayments));

    return monthlyPaymentAmount;
}



function totalInterest(totalCostAmount,totalPrincipal){
    // gives total interest that will be payed 
    let totalInterestAmount = totalCostAmount - totalPrincipal;
    return totalInterestAmount;

}



function totalCost(monthlyPaymentAmount,numberOfPayments){
    // calculates the total cost of the the loan
    let totalCostAmount = monthlyPaymentAmount * numberOfPayments;
    return totalCostAmount;
}







function display(monthlyPaymentAmount,loanAmount,totalInterestAmount,totalCostAmount){
    // displays monthly payment
    document.getElementById("monthlyPayment").innerHTML= `$ ${monthlyPaymentAmount}`;


    // displays loan amount ("principal amount")
    document.getElementById("totalPrincipal").innerHTML= `$ ${loanAmount}`;
    
    // displays the total amount of interest that will be payed
    document.getElementById("totalInterest").innerHTML= `$ ${totalInterestAmount}`;


// displays the total cost of the loan including interest
    document.getElementById("totalCost").innerHTML=`$ ${totalCostAmount}`;

}


