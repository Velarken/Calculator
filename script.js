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
let expressionTotal = 0;
let inputExpression = [1,2,3,"/",2];
// Constructors
document.querySelector("#inputExpression").textContent = inputExpression;
document.querySelector("#expressionTotal").textContent = expressionTotal;


// Event Listeners

// display function
function display() {
    //clicking a number button concats the clicked number to the end of the string
        //when an operator is clicked 
            // convert the string to a number
            // store number inside variable "firstNumber"
            // store operator inside variable "operator"
            // begin concat of new string
            // when enter is pressed
                //convert string to number
                //store number inside variable "secondNumber"
                //evaluate expression given
};
