let calculator = {
  firstNum: "",
  secondNum: "",
  operator: "",
};

let calculated = false;

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
  calculator.operator = "+";
  setDisplay(calculator.operator);
});
subtractButton.addEventListener("click", () => {
  calculator.operator = "-";
  setDisplay(calculator.operator);
});
multiplyButton.addEventListener("click", () => {
  calculator.operator = "*";
  setDisplay(calculator.operator);
});
divideButton.addEventListener("click", () => {
  calculator.operator = "/";
  setDisplay(calculator.operator);
});

clearButton.addEventListener("click", () => {
  if (calculator.operator === "") {
    let string = calculator.firstNum;
    let newString = string.substr(1, string.length - 1);
    calculator.firstNum = newString;
    setDisplay(newString);
  } else {
    let string = calculator.secondNum;
    let newString = string.substr(1, string.length - 1);
    calculator.secondNum = newString;
    setDisplay(newString);
  }
});

clearAllButton.addEventListener("click", () => {
  clearAll();
});

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (calculator.operator === "") {
      calculator.firstNum += numberButtons[i].textContent;
      setDisplay(calculator.firstNum);
    } else {
      calculator.secondNum += numberButtons[i].textContent;
      setDisplay(calculator.secondNum);
    }
  });
}

equalsButton.addEventListener("click", () => {
  if (calculator.firstNum === "") {
    let result = "0";

    setDisplay(result);
  }

  result = operate(
    Number(calculator.firstNum),
    Number(calculator.secondNum),
    calculator.operator
  );

  setDisplay(result);
});

function clearAll() {
  calculator.firstNum = "";
  calculator.secondNum = "";
  calculator.operator = "";
  setDisplay("");
}

function setDisplay(string) {
  display.textContent = string;
}

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
  if (operator === "+") {
    return `${add(firstNum, secondNum)}`;
  } else if (operator === "-") {
    return `${subtract(firstNum, secondNum)}`;
  } else if (operator === "*") {
    return `${multiply(firstNum, secondNum)}`;
  } else if (operator === "/") {
    return `${divide(firstNum, secondNum)}`;
  }
}
