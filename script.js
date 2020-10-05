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
    if (e.target.matches('button.btn.num')) {
        let input = e.target.value;
        if (answer != '') {
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

    if (e.target.matches('button.btn.dot')) {
        a.includes('.') ? '' : a += input;
        b.includes('.') ? '' : b += input;
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

function operate() {
    if (b == '') {
        render(a);
    } else {
        a = parseInt(a);
        b = parseInt(b);
        switch(operator) {
            case '/':
                if (b == 0) {
                    answer = "Cannot divide by 0";
                } else {
                    answer = a/b;
                }
                break;
            case '*':
                answer = a*b;
                break;
            case '+':
                answer = a+b;
                break;
            case '-':
                answer = a-b;
                break;
        }
        render(answer);
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