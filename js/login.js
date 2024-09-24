// document.getElementById('btn-login')
// .addEventListener('click', function(event){
//     event.preventDefault();
//     // console.log('Log in')

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber );

//     if(phoneNumber === '5' && pinNumber === '12345'){
//         console.log('you are log in');
//     }else{
//         alert('you are Wrong')
//     }
// })



document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber = document.getElementById('pin-number').value ;
    // console.log(phoneNumber, pinNumber);

        if(phoneNumber === '5' && pinNumber === '12345'){
         console.log('you are log in');
         window.location.href = '/home.html'
     }else{
       alert('you are Wrong')
    }

});