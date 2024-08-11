const form = document.getElementById('form');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let validForm = false;

form.addEventListener('submit', function(e){
    e.preventDefault();
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    const msgValido = document.querySelector('.sucess-message');
    const msgInvalido = document.querySelector('.error-message');


    if (n2.value > n1.value){
        msgValido.style.display = 'block'
        msgInvalido.style.display = 'none'
        
    }
    else{
        msgInvalido.style.display = 'block'
        msgValido.style.display = 'none'
        
    }

    n1.value = ''
    n2.value = ''
})