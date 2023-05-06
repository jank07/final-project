const numberButtons = document.querySelectorAll('button');
const currentNumber = document.querySelector('.current-number')

function displayNumbers() {
    console.log(this.textContent);
    return currentNumber.innerHTML += this.textContent;
}

numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));