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
let a = '';
let b = '';
let operator;

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        setParams(e);
    })
});

//set a, b and operator
function setParams(e) {
    if (e.target.matches('button.btn.num')) {
        let num = e.target.value;
        //if theres no operator assign value to a
        //if operator is present then assign to b
        //if answer is full then make a = answer and assign new value to b
        if (operator == undefined) {
            a += e.target.value;
            console.log(a);
            render(a);
        } else {
            b += e.target.value;
            console.log(b);
            render(b);
        }
    } else if (e.target.matches('button.btn.operator')) {
        operator = e.target.value;
    }
}

//render to display
function render(x) {
    emptyDisplay();
    const para = document.createElement('p');
    para.innerText = x;
    display.appendChild(para);
}

function operate() {
    a = parseInt(a);
    b = parseInt(b);
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
    render(answer);
};

function emptyDisplay() {
    display.innerHTML = '';
}

document.getElementById('clear').addEventListener('click', function(){
    display.innerHTML = '';
    a = '';
    b = '';
    operator = '';
});

document.getElementById('equals').addEventListener('click', operate);





