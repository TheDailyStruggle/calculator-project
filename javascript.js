let output = "";
let equation = [];
let operator = "";
let num1 = 0;
let num2 = 0;
let solution = "";


const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equals");
const decimal = document.getElementById("decimal");

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
    output = Math.round(solution * 10000) / 10000;
    output.toString();
    screen.textContent = output;
};


// Clear button function

const clear = function () {
    screen.textContent = "0";
    operator = "";
    equation = [];
    equalsBtn.disabled = true;
    num1 = 0;
    num2 = 0;
    output = "";
    solution = "";
};

clearBtn.addEventListener('click', () => {
    clear();
});

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (equation.length === 3) {
            clear();
            output = button.innerText;
            screen.textContent = output;
        } else if (screen.textContent === "0" || screen.textContent === "You Can't Do That!"
            || screen.textContent === "/" || screen.textContent === "X" || screen.textContent === "+"
            || screen.textContent === "-") {
            output = button.innerText;
            screen.textContent = output;
        }
        else {
            output = output + button.innerText;
            screen.textContent = output;
        }
    })
});

decimal.addEventListener('click', (button) => {
    if (output.includes(".")) {
        return
    } else if (equation.length === 3) {
        clear();
        output = "0" + ".";
        screen.textContent = output;
    } else if (screen.textContent === "0" || screen.textContent === "You Can't Do That!"
        || screen.textContent === "/" || screen.textContent === "X" || screen.textContent === "+"
        || screen.textContent === "-") {
        output = "0" + ".";
        screen.textContent = output;
    }
    else {
        output = output + ".";
        screen.textContent = output;
    }
});

document.addEventListener('keydown', (e) => {
    console.log(e.code);
    if (e.code === "Digit1" || e.code === "Numpad1") {
        e.preventDefault();
        document.getElementById("one").click();
    } else if (e.code === "Digit2" || e.code === "Numpad2") {
        e.preventDefault();
        document.getElementById("two").click();
    } else if (e.code === "Digit3" || e.code === "Numpad3") {
        e.preventDefault();
        document.getElementById("three").click();
    } else if (e.code === "Digit4" || e.code === "Numpad4") {
        e.preventDefault();
        document.getElementById("four").click();
    } else if (e.code === "Digit5" || e.code === "Numpad5") {
        e.preventDefault();
        document.getElementById("five").click();
    } else if (e.code === "Digit6" || e.code === "Numpad6") {
        e.preventDefault();
        document.getElementById("six").click();
    } else if (e.code === "Digit7" || e.code === "Numpad7") {
        e.preventDefault();
        document.getElementById("seven").click();
    } else if (e.code === "Digit8" || e.code === "Numpad8") {
        e.preventDefault();
        document.getElementById("eight").click();
    } else if (e.code === "Digit9" || e.code === "Numpad9") {
        e.preventDefault();
        document.getElementById("nine").click();
    } else if (e.code === "Digit0" || e.code === "Numpad0") {
        e.preventDefault();
        document.getElementById("zero").click();
    } else if (e.code === "NumpadAdd") {
        e.preventDefault();
        document.getElementById("add").click();
    } else if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Equals") {
        e.preventDefault();
        document.getElementById("equals").click();
    } else if (e.code === "NumpadDivide") {
        e.preventDefault();
        document.getElementById("divide").click();
    } else if (e.code === "NumpadMultiply") {
        e.preventDefault();
        document.getElementById("multiply").click();
    } else if (e.code === "NumpadSubtract" || e.code === "Minus") {
        e.preventDefault();
        document.getElementById("subtract").click();
    } else if (e.code === "NumpadDecimal" || e.code === "Period") {
        e.preventDefault();
        document.getElementById("decimal").click();
    }
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
    num1 = parseFloat(equation[0]);
    num2 = parseFloat(equation[2]);
    if (operator === "/" && num2 === 0) {
        screen.textContent = "You Can't Do That!"
        operator = "";
        equation = [];
        equalsBtn.disabled = true;
        num1 = 0;
        num2 = 0;
        output = "";
        solution = ""
        return
    }
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

document.addEventListener('keypress', (e) => {
    console.log(e.key);
})


let date = new Date().getFullYear();
document.getElementById("year").textContent = date;