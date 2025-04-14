// Essential Math Operations
function add(firstNumber, secondNumber) {
    if (firstNumber || secondNumber == NaN) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber) {
    if (firstNumber || secondNumber == NaN) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber) {
    if (firstNumber || secondNumber == NaN) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber) {
    if (firstNumber || secondNumber == NaN) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return add(firstNumber,secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber,secondNumber);
    } else if (operator == '*') {
        return multiply(firstNumber,secondNumber);
    } else if (operator == '/') {
        return divide(firstNumber,secondNumber);
    }
}
// Declared Variables
let inputExpression = 0;
let outputExpression = "";
let firstInput = [];
let operatorInput = "";
let secondInput = [];

// Constructors
document.querySelector("#input").textContent = inputExpression;
let output = document.querySelector("#output");

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

// Operator Event Listeners
const plusOperator = document.querySelector(".plus").addEventListener('click', () => display('+'));
const minusOperator = document.querySelector(".minus").addEventListener('click', () => display('-'));
const multiplyOperator = document.querySelector(".multiply").addEventListener('click', () => display('*'));
const divideOperator = document.querySelector(".divide").addEventListener('click', () => display('/'));
const equalsOperator = document.querySelector(".equals").addEventListener('click', () => display('='));
const clear = document.querySelector(".clear").addEventListener('click', () => display("CLEAR"));

// display function
function display(clicked) {
    console.log(clicked);
    
        if (clicked == '+') {
            operatorInput = '+';
        } else if (clicked == '-') {
            operatorInput = '-';
        } else if (clicked == '*') {
            operatorInput = '*';
        } else if (clicked == '/') {
            operatorInput = '/';
        } else {
            firstInput.push(clicked);
        }
        setDisplay();
        // display created string    
};

function setDisplay() {
    let stringInput = firstInput.toString().replace(/,/g, '');
    output.textContent = stringInput;  
}

// TODO
    // Handle what happens when an operator is clicked

// KNOWN ISSUES




    // if clicked button is a number
        // concat number to end of string
        // set input.textContent to string value
    // if clicked button is an operator
        // convert string to number, stored in "firstNumber"
        // store operator in "operator"
        // set output.textContent to string(firstNumber) and operator
        // begin new empty string on input.textContent
    // if clicked button is the equals key
        // convert string to number, stored in "secondNumber"
        // set input.textContent = firstNumber + operator + secondNumber
        // run operation function on firstNumber, operator, secondNumber
        // set output.textContent to the result of the function

