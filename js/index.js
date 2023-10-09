let firstInput;
let secondInput;
let operator;

const addButton = document.querySelector("button.add");
const subtractButton = document.querySelector("button.subtract");
const multiplyButton = document.querySelector("button.multiply");
const divideButton = document.querySelector("button.divide");

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(firstInput, secondInput, operator) {
  switch (operator) {
    case "+":
      add(firstInput, secondInput);
      break;
    case "-":
      subtract(firstInput, secondInput);
      break;
    case "*":
      multiply(firstInput, secondInput);
      break;
    case "/":
      divide(firstInput, secondInput);
      break;
  }
}
