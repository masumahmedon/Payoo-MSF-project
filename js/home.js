//add money to the account
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(addMoneyInput, pinNumberInput);
});