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
let answer;

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

function operate() {
    switch(operator) {
        case 'add':
            answer = add(a,b);
            break;
        case 'subtract':
            answer = subtract(a,b);
            break;
        case 'multiply':
            answer = multiply(a,b);
            break;
        case 'divide':
            answer = divide(a,b);
            break;
    }
    display.innerHTML = answer;
};

document.getElementById('clear').addEventListener('click', function(){
    a = '';
    b = '';
    operator = '';
    display.innerHTML = '';
});

document.getElementById('equals').addEventListener('click', operate);





