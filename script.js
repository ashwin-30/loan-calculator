document.getElementById('calculate').addEventListener('click', function (e) {
    e.preventDefault(); // Corrected line
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    const interest = parseFloat(document.getElementById('interest').value);

    if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interest)) {
        alert("Please enter valid numbers for the loan amount, loan term, and interest rate.");
    }

    const monthlyInterest = interest / 100 / 12;
    const loanTermMonths = loanTerm;
    const monthlyPayment = loanAmount * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -loanTermMonths));
    const totalInterestPaid = (monthlyPayment * loanTermMonths) - loanAmount;

    displayResult(monthlyPayment, totalInterestPaid, loanAmount);
});

function displayResult(monthlyPayment, totalInterestPaid, loanAmount) {
    document.getElementById('mPayment').innerHTML = "$"+monthlyPayment.toFixed(2);
    document.getElementById('principal').innerHTML = "$"+loanAmount;
    document.getElementById('totalInterest').innerHTML = "$"+totalInterestPaid.toFixed(2);
}
