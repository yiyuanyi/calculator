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

let operator;
let answer;
let arr1 = [];
let arr2 = [];
let a;
let b;

const result = document.getElementById('result');

//make e.target.innerHTML add number to string
//make string convert to integer
//assign integer to a or b
//have operate function run when equals is pressed
document.getElementById('buttons').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.btn.num')) {
            result.innerHTML += e.target.innerHTML;
            if (operator == undefined) {
                arr1 += e.target.innerHTML;
            } else if (operator != undefined) {
                arr2 += e.target.innerHTML;
            }
    } else if (e.target && e.target.matches('button.btn.operator')) {
        operator = (e.target.id).toString();
        result.innerHTML += e.target.innerHTML;
    }
});

function operate() {
    a = parseInt(arr1);
    b = parseInt(arr2);

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
    result.innerHTML = answer;
};

document.getElementById('clear').addEventListener('click', function(){
    a = null;
    b = null;
    operator = '';
    result.innerHTML = '';
});

document.getElementById('equals').addEventListener('click', operate);





