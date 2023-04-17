const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

const equalButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

let previousNumber = '';

const currentNumber = document.querySelector('.currentNumber'); 

let mathSign = '';

let result = '';


// currentNumberReset allows me to change the currentNumber on the screen after clicking operator
let currentNumberReset = 0;


// checkIfActive allows me to make only one button active
function checkIfActive() {
    operatorButtons.forEach((button) => {
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
    })
}

function operate() {
    checkIfActive();
    this.classList.add('active');
    if(currentNumber.innerHTML === '') {
        return;
    }
    
    if(currentNumber.innerHTML === '0' && mathSign !== '÷') {
        return currentNumber.innerHTML = '0';
    }

    if(this.textContent === '+/-') {
        return currentNumber.innerHTML = currentNumber.innerHTML * -1;
    }

    if(this.textContent === '%') {
        return currentNumber.innerHTML = currentNumber.innerHTML / 100;
    }

    if(mathSign !== '' && currentNumber !== '') {
        showResult();
    }
    // previousNumber = currentNumber.innerHTML;
    mathSign = this.textContent;
    currentNumberReset = 1;
}

function displayNumbers() {
    checkIfActive();
    if(result !== '' && mathSign === '') {
        result = '';
        return currentNumber.innerHTML = this.textContent;
    }
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '0') return currentNumber.innerHTML += '.';
    if(currentNumber.innerHTML === '0') {
        return currentNumber.innerHTML = this.textContent;
    }
    if(mathSign !== '' && currentNumberReset === 1) {
        previousNumber = currentNumber.innerHTML;
        currentNumber.innerHTML = '';
        currentNumberReset = 0;
    }
    // font size changing depending on the currentNumber number of characters
    if(currentNumber.innerHTML.length > 5 ) {
        currentNumber.style.fontSize = '4rem';
    }
    if(currentNumber.innerHTML.length > 10 ) {
        currentNumber.style.fontSize = '3rem';
    }
    if(currentNumber.innerHTML.length > 15 ) {
        currentNumber.style.fontSize = '2rem';
    }
    currentNumber.innerHTML += this.textContent;
}

function showResult() {
    if(previousNumber === '' || currentNumber.innerHTML === '') {
        return;
    }

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber);
    let operator = mathSign;

    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break
        case 'x':
        result = a * b;
        break;
        case '÷':
        result = b / a;
        break;
    }


    currentNumber.innerHTML = result;
    mathSign = '';
    previousNumber = '';
}

function clearScreen() {
    currentNumber.innerHTML = '0';
    mathSign = '';
    previousNumber = '';
}

// event listeners on buttons

operatorButtons.forEach((button) => button.addEventListener('click', operate));

numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));

equalButton.addEventListener('click', showResult);

equalButton.addEventListener('click', checkIfActive);

clearButton.addEventListener('click', clearScreen);