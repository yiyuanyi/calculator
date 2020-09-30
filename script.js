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

let a;
let b;
let operator;
let result;

const display = document.getElementById('result');

document.getElementById('buttons').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.btn.num')) {
        if (operator == undefined) {
        a = parseInt(e.target.innerHTML);
        display.innerHTML += a;
        } else {
            b = parseInt(e.target.innerHTML);
            display.innerHTML += b;
        }
    } else if (e.target && e.target.matches('button.btn.operator')) {
        operator = (e.target.id).toString();
        console.log(operator);
        display.innerHTML += e.target.innerHTML;
    }
});

function operate(operator, a, b) {
    switch(operator) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
    };
};

document.getElementById('clear').addEventListener('click', function(){
    a = '';
    b = '';
    operator = '';
    display.innerHTML = '';
});

document.getElementById('equals').addEventListener('click', operate);





