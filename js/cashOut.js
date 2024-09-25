document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('click me')

    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('pin-number-cash-out').value;
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('you are wrong')
    }
})