let output = "";
let equation = [];
let operator = "";
let num1 = 0;
let num2 = 0;
let solution = 0;


const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equals");

const addition = function (num1, num2) {
    let total = num1 + num2;
    return total;
};

const subtraction = function (num1, num2) {
    let total = num1 - num2;
    return total;
};

const multiply = function (num1, num2) {
    let total = num1 * num2;
    return total;
};

const divide = function (num1, num2) {
    let total = num1 / num2;
    return total;
};

const operate = function (operator, num1, num2) {
    if (operator === "+") {
        solution = addition(num1, num2);
    } else if (operator === "-") {
        solution = subtraction(num1, num2);
    } else if (operator === "X") {
        solution = multiply(num1, num2);
    } else if (operator === "/") {
        solution = divide(num1, num2);
    }
    output = solution;
    screen.textContent = output;
};


// Clear button function

clearBtn.addEventListener('click', () => {
    screen.textContent = "0";
    operator = "";
    equation = [];
    equalsBtn.disabled = true;
    num1 = 1;
    num2 = 1;
    output = 1;
});


numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (screen.textContent === "0" || screen.textContent === "/" || screen.textContent === "X" || screen.textContent === "+" || screen.textContent === "-") {
            output = button.innerText;
            screen.textContent = output;
        } else {
            output = output + button.innerText;
            screen.textContent = output;
        }
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operator === "+" || operator === "-" || operator === "X" || operator === "/") {
            if (equation.length = 3) {
                equals();
                equation = [];
                operator = button.textContent;
                screen.textContent = operator
                equation.push(solution);
                equation.push(operator);
            } else {
                operator = button.textContent;
                equation.pop();
                equation.push(operator);
                screen.textContent = operator;
                equalsBtn.disabled = false;
            }
        }
        else {
            operator = button.textContent;
            equation.push(output);
            equation.push(operator);
            screen.textContent = operator;
            equalsBtn.disabled = false;
        }
    })
});

//Equals Section

equalsBtn.disabled = true;

equalsBtn.addEventListener('click', (e) => {
    equals();
});


const equals = function () {
    equation.push(output);
    num1 = parseInt(equation[0]);
    num2 = parseInt(equation[2]);
    operate(operator, num1, num2);
};

// Delete Key
const del = function (string) {
    output = string.slice(0, -1);
    screen.textContent = output;
};

deleteBtn.addEventListener('click', (e) => {
    del(output);
});