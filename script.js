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

function operate(operator, a, b) {
    switch(operator) {
        case add:
            return add(a,b);
            break;
        case subtract:
            return subtract(a,b);
            break;
        case multiply:
            return multiply(a,b);
            break;
        case divide:
            return divide(a,b);
            break;
    };
};

const result = document.getElementById('result');

document.getElementById('buttons').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.btn.num')) {
        a = parseInt(e.target.innerHTML);
        result.innerHTML += a;
    } else if (e.target && e.target.matches('button.btn.operator')) {
        operator = e.target.id;
        console.log(e.target.id);
    }
});

document.getElementById('equals').addEventListener('click', operate(operator, a, b));





