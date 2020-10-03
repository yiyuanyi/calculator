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

//going to change code so that it uses more functions and less global variables
//helps to make cleaner code
//append child instead of modifying innerHTML

const display = document.getElementById('display');
const btn = document.querySelectorAll('.btn');
let a = [];
let b = [];
let operator;

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        renderParams(e);
    })
});

//set a, b and operator, depending on which have already been assigned etc.
function setParams(e) {
    const params = document.createElement('p');
    if (e.target.matches('button.btn.num')) {
        if (operator == undefined) {
            a += e.target.innerHTML;
            console.log(a);
        } else {
            b += e.target.innerHTML;
            console.log(b);
        }
    } else if (e.target.matches('button.btn.operator')) {
        operator = e.target;
        console.log(operator.value); 
    }
}

//render parameters to display
function renderParams(e) {
    setParams(e);
    const params = document.createElement('p');
    if (a != undefined) {
        params.innerText += a;
    };
    if (operator != undefined) {
        params.innerText += operator.innerHTML;
    };
    if (b != undefined) {
        params.innerText += b;
    };
    display.appendChild(params);
}

//should render the answer to the current sum
function render(answer) {
    const result = document.createElement('p');
    result.innerText = answer;
    display.appendChild(result);
}

function operate() {
    //in BODMAS order
    switch(operator) {
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
    result.innerHTML = answer;
};

document.getElementById('clear').addEventListener('click', function(){
    result.innerHTML = '';
});

document.getElementById('equals').addEventListener('click', operate);





