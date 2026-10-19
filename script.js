const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");

let firstNumber = "";
let secondNumber = "";
let operation = "";
let resultDisplayed = false;

function addNumber(number) {

    if (resultDisplayed) {
        display.value = number;
        firstNumber = number;
        secondNumber = "";
        operation = "";
        resultDisplayed = false;

        return;
    }

    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function chooseOperation(selectedOperation) {

    firstNumber = display.value;

    operation = selectedOperation;

    display.value = "0";

    resultDisplayed = false;
}


function calculate() {

    if (firstNumber === "" || operation === "") {
        return;
    }

    secondNumber = display.value;

    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    let result;

    if (operation === "+") {
        result = number1 + number2;
    }
    else if (operation === "-") {
        result = number1 - number2;
    }
    else if (operation === "*") {
        result = number1 * number2;
    }
    else if (operation === "/") {

        if (number2 === 0) {
            display.value = "Error";

            firstNumber = "";
            secondNumber = "";
            operation = "";

            return;
        }

        result = number1 / number2;
    }
    else if (operation === "%") {
        result = number1 % number2;
    }

    display.value = result;

    firstNumber = result;
    secondNumber = "";
    operation = "";

    resultDisplayed = true;
}



function clearCalculator() {

    display.value = "0";

    firstNumber = "";
    secondNumber = "";
    operation = "";

    resultDisplayed = false;
}



function deleteNumber() {

    if (display.value.length === 1) {
        display.value = "0";
    }
    else {
        display.value = display.value.slice(0, -1);
    }
}


numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        addNumber(button.textContent);

    });

});


operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        chooseOperation(button.dataset.operation);

    });

});



decimalButton.addEventListener("click", function() {

    if (!display.value.includes(".")) {
        display.value += ".";
    }

});


equalsButton.addEventListener("click", function() {

    calculate();

});



clearButton.addEventListener("click", function() {

    clearCalculator();

});



deleteButton.addEventListener("click", function() {

    deleteNumber();

});