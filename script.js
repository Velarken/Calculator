// Essential Math Operations
function add(firstNumber, secondNumber) {
    return Number(firstNumber) + Number(secondNumber);
}

function subtract(firstNumber,secondNumber) {
    return Number(firstNumber) - Number(secondNumber);
}

function multiply(firstNumber,secondNumber) {
    return Number(firstNumber) * Number(secondNumber);
}

function divide(firstNumber,secondNumber) {
    return Number(firstNumber) / Number(secondNumber);
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == "/" && secondNumber == 0) {
        alert("You cannot divide by zero!");
        clearDisplay();
    } else if (operator == '+') {
        return add(firstNumber,secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber,secondNumber);
    } else if (operator == '*') {
        return multiply(firstNumber,secondNumber);
    } else if (operator == '/') {
        return divide(firstNumber,secondNumber);
    }
}
// Input Variables
let firstInput = "";
let operatorInput = "";
let secondInput = "";

// Valid Characters
const validInputs = "1234567890.";
const validOperators = "+-*/";

// Display Variables
let displayOutput = document.querySelector("#display");
let displayCurrentExpression = document.querySelector("#output");

// Numerical Event Listeners
const buttonOne = document.querySelector('.one').addEventListener('click', () => display(1));
const buttonTwo = document.querySelector('.two').addEventListener('click', () => display(2));
const buttonThree = document.querySelector('.three').addEventListener('click', () => display(3));
const buttonFour = document.querySelector('.four').addEventListener('click', () => display(4));
const buttonFive = document.querySelector('.five').addEventListener('click', () => display(5));
const buttonSix = document.querySelector('.six').addEventListener('click', () => display(6));
const buttonSeven = document.querySelector('.seven').addEventListener('click', () => display(7));
const buttonEight = document.querySelector('.eight').addEventListener('click', () => display(8));
const buttonNine = document.querySelector('.nine').addEventListener('click', () => display(9));
const buttonZero = document.querySelector('.zero').addEventListener('click', () => display(0));
const buttonDecimal = document.querySelector('.decimal')
buttonDecimal.addEventListener('click', () => {
    if (!operatorInput && !firstInput.includes(".")) {
        display(buttonDecimal.textContent);
    } else if (operatorInput && !secondInput.includes(".")) {
        display(buttonDecimal.textContent);
    } 
});

// Operator Event Listeners
document.querySelector(".plus").addEventListener('click', () => display('+'));
document.querySelector(".minus").addEventListener('click', () => display('-'));
document.querySelector(".multiply").addEventListener('click', () => display('*'));
document.querySelector(".divide").addEventListener('click', () => display('/'));
document.querySelector(".equals").addEventListener('click', () => display('='));
document.querySelector(".clear").addEventListener('click', () => clearDisplay());
document.querySelector(".backspace").addEventListener('click', () => backspace());

// Keyboard support
const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
    display(e.key);
});

// display function
function display(clicked) {
    if (validInputs.includes(clicked)) {
        if (!operatorInput) {
            firstInput += clicked;
            displayOutput.textContent = firstInput;
        } else if (operatorInput) {
            secondInput += clicked;
            displayCurrentExpression.textContent = ` ${firstInput} ${operatorInput}`;
            displayOutput.textContent = secondInput;
        } 
    } else if (validOperators.includes(clicked)) {
        if (!operatorInput) {
            operatorInput = clicked;
        } else if (operatorInput && firstInput && secondInput) {
            firstInput = operate(operatorInput, firstInput, secondInput);
            displayCurrentExpression.textContent = firstInput;
            secondInput = ""
        } else if (operatorInput && !firstInput && !secondInput) {
            firstInput = "0";
            operatorInput = clicked;
        } else if (operatorInput && firstInput && !secondInput) {
            operatorInput = clicked;
        }
    } else if (clicked == "=" || clicked == "Enter") {
        if (operatorInput && firstInput && secondInput) {
            displayCurrentExpression.textContent = `${firstInput} ${operatorInput} ${secondInput} =`
            firstInput = String(operate(operatorInput, firstInput, secondInput));
            displayOutput.textContent = firstInput;
            secondInput = "";
            operatorInput = "";
        } else if (operatorInput && firstInput && !secondInput) {
            firstInput = String(operate(operatorInput, firstInput, firstInput));
            displayOutput.textContent = firstInput;
            secondInput = "";
            operatorInput = "";
        }
    }
};

function backspace() {
    console.log("backspace clicked!")
    if (!operatorInput) {
        firstInput = firstInput.slice(0, firstInput.length - 1);
        if (!firstInput) {
            displayOutput.textContent = 0;
        } else {
            displayOutput.textContent = firstInput;
        }
    } else if (operatorInput && secondInput) {
        secondInput = secondInput.slice(0, secondInput.length - 1) 
        if (!secondInput) {
            displayOutput.textContent = 0;
        } else {
            displayOutput.textContent = secondInput;
        }
    }
}

// Reset variables to empty and clear textContent
function clearDisplay() {
    displayOutput.textContent = "0";
    displayCurrentExpression.textContent = "";
    firstInput = [];
    secondInput = [];
    operatorInput = "";
}