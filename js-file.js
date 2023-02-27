

function operate(operator, operand1, operand2) {
    if (operator === '+')
        return add(operand1, operand2);
    if (operator === '-')
        return substract(operand1, operand2);
    if (operator === '*')
        return multiply(operand1, operand2);
    if (operator === '/')
        return divide(operand1, operand2);
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const result = document.querySelector(".result");
result.textContent = "0";

let operator;
let operand1;
let operand2;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (event) => {
        console.log(event);
        result.textContent += event.originalTarget.textContent;
    })
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (event) => {

        operator = event.originalTarget.textContent;
        operand1 = parseInt(result.textContent);
        if (operand1 === "") {
            alert("Please enter a value before operator");
            return;
        }
        result.textContent += operator;
    })

});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    result.textContent = "";
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    let resultValue = result.textContent;
    if (resultValue === "") {
        alert("Please enter Some values");
        return;
    }
    if (!operator) {
        alert("Please enter an operator");
        return;
    }
    let operand2Index = resultValue.indexOf(operator) + 1;
    if (!resultValue.substring(operand2Index)) {
        alert("Please enter value after operator");
        return;
    }

    operand2 = parseInt(resultValue.substring(operand2Index));
    result.textContent = operate(operator, operand1, operand2);

})

