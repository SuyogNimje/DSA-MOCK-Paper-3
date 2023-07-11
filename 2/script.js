const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

submitBtn.addEventListener('click', () => {
  const text = userInput.value;
  if (text) {
    const newElement = document.createElement('p');
    newElement.textContent = text;
    output.appendChild(newElement);
    userInput.value = '';
  }
});
