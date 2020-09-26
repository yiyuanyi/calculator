function add(a, b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a/b;
};

let num1;
let num2;

function operate(operator, num1, num2) {
    let a = num1;
    let b = num2;
    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    };
};

const result = document.getElementById('result');

const btn = document.querySelectorAll('.btn');
btn.forEach((button) => {
    addEventListener('click', addValue)
});

function addValue() {
    let value = button.keys(btn.data-value);
    console.log(value);
}



