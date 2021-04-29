let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let fullName = document.querySelector('#full-name');
let address = document.querySelector('#address');
let city = document.querySelector('#city');
let country = document.querySelector('#country');
let postalCode = document.querySelector('#postal-code');
const btnContinue = document.querySelector('#continue');

let minuses = document.querySelectorAll('.minus');
let pluses = document.querySelectorAll('.plus');
let number = document.querySelectorAll('.number');
var total = document.querySelector('.total');
var cartTotal = 148.98;

// Cart 
for (let i = 0; i < minuses.length; i++) {
    minuses[i].addEventListener('click', function () {

        number[i].innerHTML = Number(number[i].innerHTML) - 1;

        if (number[i].innerHTML < 1) {
            number[i].innerHTML = 0;
        }

        cartTotal -= Number(number[i].getAttribute('const'));
        total.innerHTML = cartTotal.toFixed(2);

    })
}

for (let i = 0; i < pluses.length; i++) {
    pluses[i].addEventListener('click', function () {
        number[i].innerHTML = Number(number[i].innerHTML) + 1;

        if (Number(number[i].innerHTML) < 1) {
            Number(number[i].innerHTML) = 0;
        }

        cartTotal += Number(number[i].getAttribute('const'));
        total.innerHTML = cartTotal.toFixed(2);
    })
}

// Validation Form
btnContinue.addEventListener('click', function () {
    let pesan = '';

    if (
        email.value === '' || phone.value === '' ||
        fullName.value === '' || address.value === '' ||
        city.value === '' ||
        country.value === '' ||
        postalCode.value === ''
    ) {
        pesan = 'input cannot be empty!'
    } else {
        pesan = 'success';
    }

    alert(pesan);
})