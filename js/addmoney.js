//form submit
 document.getElementById('btn-add-money')
 .addEventListener('click', function(event){
    event.preventDefault();
    console.log('added the event');

    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseInt(addMoney);
    const pinNumber = document.getElementById('pin-number-input').value;
    // console.log(addMoney, pinNumber);
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance')
        .innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance =  balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('please try again')
    }
 });