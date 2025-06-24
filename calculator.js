let number = '';

function press(value) {
  number += value;
  document.querySelector('#h').value = number;
}

function calculate() {
  try {
    number = eval(number).toString();
    document.querySelector('#h').value = number;
  } catch {
    document.querySelector('#h').value = 'Error';
    number = '';
  }
}

function clearDisplay() {
  number = '';
  document.querySelector('#h').value = '';
}
