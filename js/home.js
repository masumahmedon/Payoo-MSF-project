//add money to the account
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(addMoneyInput, pinNumberInput);

    if(pinNumberInput === '1234'){
        console.log('adding money to your account')

        const balance = document.getElementById('account-balance')
        .innerText;
        console.log(balance)

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)
        
        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('Please Try Again.')
    }
});