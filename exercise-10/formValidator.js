// create form
const form = document.createElement('form');
form.id = 'myForm';
form.style.cssText=`
background:#fff;
padding:20px;
border-radius:8px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
width:300px;
margin:50px auto;
font=family:Arial, sana-serif;
`;
document.body.appendChild(form);

// email label
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
form.appendChild(emailLabel);

// Email input
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.style.cssText=`
width:100%;
padding:8px;
margin:8px 0;
border-radius:4px;

`;
form.appendChild(emailInput);

// Email feedback
const emailFeedback = document.createElement('div');
emailFeedback.id = 'emailFeedback';
emailFeedback.className = 'feedback';
form.appendChild(emailFeedback);

// Password Label
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
form.appendChild(passwordLabel);

// password input
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.placeholder = 'Enter password';
passwordInput.style.cssText=`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;

`;

form.appendChild(passwordInput);

// Password feedback div
const passwordFeedback = document.createElement('div');
passwordFeedback.id = 'passwordFeedback';
passwordFeedback.className = 'feedback';
form.appendChild(passwordFeedback);

// submit button
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.id = 'submitBtn';
submitBtn.textContent = 'Submit';
submitBtn.disabled = true;
submitBtn.style.cssText = `
  width: 100%;
  padding: 10px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
form.appendChild(submitBtn);

// Validation logic
function validateEmail(value) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(value);
}

function validatePassword(value) {
  return value.length >= 6;
}

function checkForm() {
  const emailValid = validateEmail(emailInput.value);
  const passwordValid = validatePassword(passwordInput.value);

  if (emailValid) {
    emailFeedback.textContent = 'Valid email ✔';
    emailFeedback.style.color = 'green';
  } else {
    emailFeedback.textContent = 'Invalid email ✘';
    emailFeedback.style.color = 'red';
  }

  if (passwordValid) {
    passwordFeedback.textContent = 'Strong enough ✔';
    passwordFeedback.style.color = 'green';
  } else {
    passwordFeedback.textContent = 'Password must be at least 6 characters ✘';
    passwordFeedback.style.color = 'red';
  }

  submitBtn.disabled = !(emailValid && passwordValid);
}

// Live feedback
emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);

// Submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});
