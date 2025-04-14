// Essential Math Operations
function add(firstNumber, secondNumber) {
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber) {
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber) {
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber) {
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
    }
    return firstNumber / secondNumber;
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
// Declared Variables
let inputExpression = 0;
let outputExpression = "";
let firstInput = [];
let operatorInput = "";
let secondInput = [];

// Constructors
// let displayInput = document.querySelector("#input").textContent = inputExpression;
let displayOutput = document.querySelector("#display");

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
const buttonDecimal = document.querySelector('.decimal').addEventListener('click', () => display('.'));

// Operator Event Listeners
const plusOperator = document.querySelector(".plus").addEventListener('click', () => display('+'));
const minusOperator = document.querySelector(".minus").addEventListener('click', () => display('-'));
const multiplyOperator = document.querySelector(".multiply").addEventListener('click', () => display('*'));
const divideOperator = document.querySelector(".divide").addEventListener('click', () => display('/'));
const equalsOperator = document.querySelector(".equals").addEventListener('click', () => display('='));
const clear = document.querySelector(".clear").addEventListener('click', () => clearDisplay());

// display function
function display(clicked) {
    console.log(clicked);
        if (operatorInput == "") {
            if (clicked == '+') {
                operatorInput = '+';
                displayOutput.textContent = secondInput;
            } else if (clicked == '-') {
                operatorInput = '-';
                displayOutput.textContent = secondInput;
            } else if (clicked == '*') {
                operatorInput = '*';
                displayOutput.textContent = secondInput;
            } else if (clicked == '/') {
                operatorInput = '/';
                displayOutput.textContent = secondInput;
            } else if (clicked == '.') {
                firstInput.push(clicked);
            } else {
                firstInput.push(clicked);
            }
            convertToNumber();
        } else if (firstInput !== 0 && operatorInput !== "") {
            if (clicked == "+" || clicked == "*" || clicked == "-" || clicked == "/") {
                alert("You can only add two numbers!")
                console.log("clicked key not logged")
            } else if (clicked == "=") {
                console.log("call the operator function")
                displayOutput.textContent = operate(operatorInput, firstInput, secondInput);
            } else {
                secondInput.push(clicked);
                convertToNumber();
            }
        } 

        // display created string    
};

// Convert user input to a string
function convertToNumber() {
    if (firstInput.length !== 0 && secondInput.length === 0) {
        let stringInput = firstInput.toString().replace(/,/g, '');
        displayOutput.textContent = Number(stringInput);
    } else if (secondInput.length !== 0 && secondInput !== "clear") {
        let stringInput = secondInput.toString().replace(/,/g, '');
        displayOutput.textContent = Number(stringInput);
    } else {
        clearDisplay();
    }
}

// Reset variables to empty and clear textContent
function clearDisplay() {
    console.log("display cleared")
    displayOutput.textContent = " ";
    firstInput = [];
    secondInput = [];
    operatorInput = "";
}

// TODO
    // Accept additional numbers for calculation
        /* 
        (12 + 7 + 8) Should evaluate 12+7 first, then add 8, like:  (12+7) + 8
            // put all inputs into an array [43,"+",197,"-",81]
            // use methods to determine positions of each element
                // compute value of the first two numbers with given operator  
                    // set return to a variable
                // compute next value from the variable created above and the next number
                // repeat as needed, array[0] may need to be a placeholder
                    // odd indexes are numbers, evens are operators
        */
    // Accept decimal answers
        // Round at 9 digits
    // Ensure that after an expression is evaluated, 
        // new numbers enter also reset all variables
    // Add a backspace key that undoes the last input
    // Add a decimal button that disables if the current number contains one
    // Add support for keyboards
    // Refactor code for clarity and efficiency
    

// KNOWN ISSUES
    // numbers like 100 return NaN
    // decimal numbers do not calculate
