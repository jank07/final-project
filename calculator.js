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

    if(mathSign !== '' && currentNumber !== '') {
        showResult();
    }
    // previousNumber = currentNumber.innerHTML;
    mathSign = this.textContent;
    currentNumberReset = 1;
}

function displayNumbers() {
    checkIfActive();
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
    currentNumber.innerHTML += this.textContent;
}

function showResult() {
    // popracuj nad rowna sie i klasa active BUG!!!
    // checkIfActive();
    if(previousNumber === '' || currentNumber.innerHTML === '') {
        return;
    }
    // if(previousNumber === 0 || mathSign === '÷') {
    //     return currentNumber.innerHTML = '0';
    // }

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

clearButton.addEventListener('click', clearScreen);