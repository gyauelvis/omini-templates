const emailErrorMessage = document.getElementById('email-error');
const passwordErrorMessage = document.getElementById('password-error');
const displayEmailErrorMessage = () => emailErrorMessage.classList.replace('hidden', 'block');
const hideEmailErrorMessage = () => emailErrorMessage.classList.replace('block', 'hidden');
const displayPasswordErrorMessage = () => passwordErrorMessage.classList.replace('hidden', 'block');
const hidePasswordErrorMessage = () => passwordErrorMessage.classList.replace('block', 'hidden');

const displayPasswordLengthError = () => document.getElementById('passwordLengthError').classList.replace('hidden', 'block');
const displayPasswordSpecialCharacterError = () => document.getElementById('passwordSpecialCharacterError').classList.replace('hidden', "block");
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) displayEmailErrorMessage();
    return true;
}

const submit = (formData) => {
    const [correctEmail, correctPassword] = ["gyauelvis@gmail.com", "12345678"];
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    if (validateEmail(data.email)) {
        if (data.email != correctEmail) displayEmailErrorMessage();
        if (data.password != correctPassword) displayPasswordErrorMessage()
    };
}


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    submit(formData);
})

const hideErrors = (type) => {
    if (type === 'password') hidePasswordErrorMessage();
    else if (type === 'email') hideEmailErrorMessage();
}

document.getElementById('password').addEventListener('focus', () => {
    hideErrors("password");
})

document.getElementById('email').addEventListener('focus', () => {
    hideErrors("email");
})