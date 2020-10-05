const display = document.getElementById('display');
const btn = document.querySelectorAll('.btn');

let a = '';
let b = '';
let operator = '';
let answer = '';

btn.forEach(button => {
    button.addEventListener('click', (e) => setParams(e))
});

function setParams(e) {
    let input = e.target.value;

    if (e.target.matches('button.btn.num')) {

        if (answer != '' && operator != '') {
            a = answer;
        }

        if (operator == '') {
            if (a.length < 12) {
                a += input;
            }
            render(a);
        } else {
            if (b.length < 12) {
                b += input;
            }
            render(b);
            }
        }

    if (e.target.matches('button.btn.delete')) {
        operator == '' ? (a = a.toString().slice(0, -1), render(a)) : (b = b.toString().slice(0, -1), render(b));
    }

    if (e.target.matches('button.btn.dot')) {
        if (operator == '') {
            a.includes('.') ? '' : a += input;
            render(a);
        } else {
            b.includes('.') ? '' : b += input;
            render(b);
        } 
    }

    if (e.target.matches('button.btn.sign')) {
        operator == '' ? a = -a : b = -b;
        operator == '' ? render(a) : render(b);
    }

    if (e.target.matches('button.btn.operator')) {
        if (operator != '') {
            operate();
            operator = input;
        } else {
            operator = input;
        }
    }

}

function render(x) {
    emptyDisplay();
    const para = document.createElement('p');
    para.innerText = x;
    display.appendChild(para);
}

function deleteLast(x) {
    x = x.toString().slice(0, -1);
    render(x);
}

function operate() {
    if (b == '') {
        render(a);
    } else {
        a = parseFloat(a);
        b = parseFloat(b);
        switch(operator) {
            case '/':
                if (b == 0) {
                    answer = "Cannot divide by 0";
                    render(answer);
                    answer = '';
                    break;
                } else {
                    answer = a/b;
                    render(answer);
                }
                break;
            case '*':
                answer = a*b;
                render(answer);
                break;
            case '+':
                answer = a+b;
                render(answer);
                break;
            case '-':
                answer = a-b;
                render(answer);
                break;
        }
        b = '';
    }
};

function emptyDisplay() {
    display.innerHTML = '';
}

document.getElementById('clear').addEventListener('click', function(){
    display.innerHTML = '';
    a = '';
    b = '';
    operator = '';
    answer = '';
});

document.getElementById('equals').addEventListener('click', operate);