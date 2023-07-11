const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');
  const dateInput = document.getElementById('date');
  const colorInput = document.getElementById('color');

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  let valid = true;

  resetValidation();

  if (!nameRegex.test(nameInput.value)) {
    showError(nameInput, 'Please enter a valid name.');
    valid = false;
  }

  if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email address.');
    valid = false;
  }

  if (!phoneRegex.test(phoneInput.value)) {
    showError(phoneInput, 'Please enter a valid phone number (10 digits only).');
    valid = false;
  }

  if (!passwordRegex.test(passwordInput.value)) {
    showError(passwordInput, 'Password must be at least 8 characters long and contain at least one letter and one number.');
    valid = false;
  }

  if (ageInput.value < 18 || ageInput.value > 99) {
    showError(ageInput, 'Please enter a valid age (between 18 and 99).');
    valid = false;
  }

  if (genderInput.value === '') {
    showError(genderInput, 'Please select a gender.');
    valid = false;
  }

  if (dateInput.value === '') {
    showError(dateInput, 'Please select a date.');
    valid = false;
  }

  if (colorInput.value === '') {
    showError(colorInput, 'Please select a color.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
}

function showError(input, errorMessage) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.error');
  errorElement.textContent = errorMessage;
  formGroup.classList.add('error');
}

function resetValidation() {
  const formGroups = form.querySelectorAll('.error');
  formGroups.forEach((formGroup) => {
    formGroup.classList.remove('error');
    const errorElement = formGroup.querySelector('.error');
    errorElement.textContent = '';
  });
}
