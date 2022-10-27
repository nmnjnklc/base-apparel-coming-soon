const form = document.querySelector('#form');
const input = document.querySelector('#email-input');
const submit = document.querySelector('#submit-btn');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

var email = '';

input.addEventListener('change', (e) => {
    email = e.target.value;
});

submit.addEventListener('click', () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        input.classList.add('valid-email');
        setTimeout(() => {
            input.classList.remove('valid-email');
            form.reset();
        }, 2000)
    } else {
        input.classList.add('invalid-email');
        errorMsg.classList.remove('hide');
        errorIcon.classList.remove('hide');
        setTimeout(() => {
            input.classList.remove('invalid-email');
            errorMsg.classList.add('hide');
            errorIcon.classList.add('hide');
            form.reset();
        }, 2000)
    }
});