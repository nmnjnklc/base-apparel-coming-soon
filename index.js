const form = document.querySelector('#form');
const input = document.querySelector('#email-input');
const submit = document.querySelector('#submit-btn');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

var email = '';

var validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

input.addEventListener('change', (e) => {
    email = e.target.value;
});

submit.addEventListener('click', () => {
    if (!validRegex.test(email)) {
        input.classList.add('invalid-email');
        errorMsg.classList.remove('hide');
        errorIcon.classList.remove('hide');
        setTimeout(() => {
            input.classList.remove('invalid-email');
            errorMsg.classList.add('hide');
            errorIcon.classList.add('hide');
            email = '';
            form.reset();
        }, 2000)
} else {
        input.classList.add('valid-email');
        setTimeout(() => {
            input.classList.remove('valid-email');
            form.reset();
        }, 2000)
    }
});