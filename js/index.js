let firstInput = "";
let secondInput = "";
let operator = "";

const addButton = document.querySelector("button.add");
const subtractButton = document.querySelector("button.subtract");
const multiplyButton = document.querySelector("button.multiply");
const divideButton = document.querySelector("button.divide");
const equalsButton = document.querySelector("button.equals");
const decimalButton = document.querySelector("button.decimal");
const percentButton = document.querySelector("button.percent");
const numberButtons = document.querySelectorAll("button.number");
const clearButton = document.querySelector("button.clear");
const clearAllButton = document.querySelector("button.clear-all");
const display = document.querySelector(".display");

addButton.addEventListener("click", () => {
  operator = "+";
  setDisplay(operator);
});
subtractButton.addEventListener("click", () => {
  operator = "-";
  setDisplay(operator);
});
multiplyButton.addEventListener("click", () => {
  operator = "*";
  setDisplay(operator);
});
divideButton.addEventListener("click", () => {
  operator = "/";
  setDisplay(operator);
});

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (operator === "") {
      firstInput += numberButtons[i].textContent;
      setDisplay(firstInput);
    } else {
      secondInput += numberButtons[i].textContent;
      setDisplay(secondInput);
    }
  });
}

function setDisplay(string) {
  display.textContent = string;
}

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
