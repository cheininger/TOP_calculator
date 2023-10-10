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
const backspaceButton = document.querySelector("button.backspace");
const clearAllButton = document.querySelector("button.clear-all");
const display = document.querySelector(".display");

addButton.addEventListener("click", () => {
  if (
    calculator.firstNum !== "" &&
    calculator.secondNum !== "" &&
    calculator.operator !== ""
  ) {
    calculate();
    calculator.operator = "+";
    setDisplay(`${display.textContent} +`);
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator !== "" &&
    calculator.secondNum === ""
  ) {
    calculator.operator = "+";
    setDisplay(`${calculator.firstNum} ${calculator.operator}`);
  } else {
    calculator.operator = "+";
    setDisplay(`${display.textContent} ${calculator.operator}`);
  }
});

subtractButton.addEventListener("click", () => {
  if (
    calculator.firstNum !== "" &&
    calculator.secondNum !== "" &&
    calculator.operator !== ""
  ) {
    calculate();
    calculator.operator = "-";
    setDisplay(`${display.textContent} -`);
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator !== "" &&
    calculator.secondNum === ""
  ) {
    calculator.operator = "-";
    setDisplay(`${calculator.firstNum} ${calculator.operator}`);
  } else {
    calculator.operator = "-";
    setDisplay(`${display.textContent} ${calculator.operator}`);
  }
});

multiplyButton.addEventListener("click", () => {
  if (
    calculator.firstNum !== "" &&
    calculator.secondNum !== "" &&
    calculator.operator !== ""
  ) {
    calculate();
    calculator.operator = "x";
    setDisplay(`${display.textContent} x`);
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator !== "" &&
    calculator.secondNum === ""
  ) {
    calculator.operator = "x";
    setDisplay(`${calculator.firstNum} ${calculator.operator}`);
  } else {
    calculator.operator = "x";
    setDisplay(`${display.textContent} ${calculator.operator}`);
  }
});

divideButton.addEventListener("click", () => {
  if (
    calculator.firstNum !== "" &&
    calculator.secondNum !== "" &&
    calculator.operator !== ""
  ) {
    calculate();
    calculator.operator = "\u{00F7}";
    setDisplay(`${display.textContent} \u{00F7}`);
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator !== "" &&
    calculator.secondNum === ""
  ) {
    calculator.operator = "\u{00F7}";
    setDisplay(`${calculator.firstNum} ${calculator.operator}`);
  } else {
    calculator.operator = "\u{00F7}";
    setDisplay(`${display.textContent} ${calculator.operator}`);
  }
});

// decimalButton.addEventListener("click", () => {
//   if (calculator.firstNum !== "" && !calculator.secondNum.includes(".")) {
//     calculator.secondNum += ".";
//     setDisplay(
//       `${calculator.firstNum} ${calculator.operator} ${calculator.secondNum}`
//     );
//   } else if (calculator.firstNum !== "" && !calculator.firstNum.includes(".")) {
//     calculator.firstNum += ".";
//     setDisplay(`${calculator.firstNum}`);
//   }
// });

backspaceButton.addEventListener("click", () => {
  if (
    calculator.firstNum !== "" &&
    calculator.secondNum !== "" &&
    calculator.operator !== ""
  ) {
    let string = calculator.secondNum;
    let newString = string.slice(0, string.length - 1);
    calculator.secondNum = newString;
    setDisplay(
      `${calculator.firstNum} ${calculator.operator} ${calculator.secondNum}`
    );
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator !== "" &&
    calculator.secondNum === ""
  ) {
    calculator.operator = "";
    setDisplay(`${calculator.firstNum}`);
  } else if (
    calculator.firstNum !== "" &&
    calculator.operator === "" &&
    calculator.secondNum === ""
  ) {
    let string = calculator.firstNum;
    let newString = string.slice(0, string.length - 1);
    calculator.firstNum = newString;
    setDisplay(`${calculator.firstNum}`);
  }
});

clearAllButton.addEventListener("click", () => {
  clearAll();
});

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (calculator.operator === "") {
      calculator.firstNum += numberButtons[i].textContent;
      setDisplay(`${calculator.firstNum}`);
    } else {
      calculator.secondNum += numberButtons[i].textContent;
      setDisplay(`${display.textContent} ${calculator.secondNum}`);
    }
  });
}

equalsButton.addEventListener("click", () => {
  if (calculator.operator !== "" && calculator.secondNum !== "") {
    calculate();
  } else {
    setDisplay(calculator.firstNum);
  }
});

function calculate() {
  result = operate(
    Number(calculator.firstNum),
    Number(calculator.secondNum),
    calculator.operator
  );

  setDisplay(result);

  calculator.firstNum = result;
  calculator.secondNum = "";
  calculator.operator = "";

  calculated = true;
}

function clearAll() {
  calculator.firstNum = "";
  calculator.secondNum = "";
  calculator.operator = "";
  setDisplay("");
  calculated = false;
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
  if (secondNum === 0) {
    return "Please don't try to explode the universe...";
  } else {
    return firstNum / secondNum;
  }
}

function operate(firstNum, secondNum, operator) {
  if (operator === "+") {
    return `${add(firstNum, secondNum)}`;
  } else if (operator === "-") {
    return `${subtract(firstNum, secondNum)}`;
  } else if (operator === "x") {
    return `${multiply(firstNum, secondNum)}`;
  } else if (operator === "\u{00F7}") {
    return `${divide(firstNum, secondNum)}`;
  }
}
