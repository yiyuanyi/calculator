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

btn.forEach(button => {button.addEventListener('click', setParams)});

//set a, b and operator, depending on which have already been assigned etc.
function setParams(e) {
    let a = [];
    let b = [];
    let operator;
    const params = document.createElement('p');
    if (e.target.matches('button.btn.num')) {
        if (operator == undefined) {
            a += e.target.innerHTML;
            console.log(a);
            params.innerText += a;
        } else {
            b += e.target.innerHTML;
            console.log(b);
            params.innerText += b;
        }
    } else if (e.target.matches('button.btn.operator')) {
        operator = e.target.value;
        console.log(operator); 
        params.innerText += operator;
    }
    display.appendChild(params);
}

//should render the current calculation
function render(params) {
    const calc = document.createElement('p');
    //calc.innerText = ;
    display.appendChild(calc);
}

//should render the answer to the current sum
function render(answer) {
    const result = document.createElement('p');
    //result.innerText = ;
    display.appendChild(result)
}

/*document.getElementById('buttons').addEventListener('click', function(e) {
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
});*/

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
    arr1 = [];
    arr2 = [];
    operator = undefined;
    result.innerHTML = '';
});

document.getElementById('equals').addEventListener('click', operate);





