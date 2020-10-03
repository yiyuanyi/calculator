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

const display = document.getElementById('display');
const btn = document.querySelectorAll('.btn');
let a = [];
let b = [];
let operator;

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        setParams(e);
    })
});

//set a, b and operator
function setParams(e) {
    if (e.target.matches('button.btn.num')) {
        if (operator == undefined) {
            a += e.target.innerHTML;
            console.log(a);
            renderParameter(a);
        } else {
            b += e.target.innerHTML;
            console.log(b);
            renderParameter(b);
        }
    } else if (e.target.matches('button.btn.operator')) {
        operator = e.target;
        console.log(operator.value);
    }
}

//render parameters to display
function renderParameter(x) {
    emptyDisplay();
    const params = document.createElement('p');
    params.innerText = x;
    display.appendChild(params);
}

function operate() {
    a = parseInt(a);
    b = parseInt(b);
    //in BODMAS order
    switch(operator.value) {
        case '/':
            if (b == 0) {
                answer = "Cannot divide by 0";
            } else {
                answer = divide(a,b);
            }
            break;
        case '*':
            answer = multiply(a,b);
            break;
        case '+':
            answer = add(a,b);
            break;
        case '-':
            answer = subtract(a,b);
            break;
    }
    emptyDisplay();
    render(answer);
};

//should render the answer to the current sum in display
function render(answer) {
    const result = document.createElement('p');
    result.innerText = answer;
    display.appendChild(result);
    console.log(answer);
}

function emptyDisplay() {
    display.innerHTML = '';
}

document.getElementById('clear').addEventListener('click', function(){
    display.innerHTML = '';
    a = [];
    b = [];
    operator = '';
});

document.getElementById('equals').addEventListener('click', operate);





