const text = document.getElementById('input');
const output = document.getElementById('output');

text.addEventListener('input', () => {
  const value = text.value;
  output.innerText = `${value}`;
});