const greeting = document.getElementById('greeting');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
  if (greeting.textContent === 'Hello, world!') {
    greeting.textContent = 'Hello, AI!';
  } else {
    greeting.textContent = 'Hello, world!';
  }
});
