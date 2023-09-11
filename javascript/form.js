const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validateInputs();
});

function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else if (usernameValue.length <= 5){
        setError(username, 'Name should be more than 5 characters long');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else if (subjectValue.length <= 15){
        setError(subject, 'Subject should be more than 15 characters long');
    } else {
        setSuccess(subject);
    }

    if(messageValue === '') {
        setError(message,'Message is required');
    } else if (messageValue.length <= 25){
        setError(message, 'Message should be more than 25 characters long');
    } else {
        setSuccess(message);
    }
};