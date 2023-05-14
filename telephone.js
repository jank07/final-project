const numberButtons = document.querySelectorAll('button');
const currentNumber = document.querySelector('.current-number')
const telephoneSvg = document.querySelector('.telephone-svg')

function displayNumbers() {
    return currentNumber.innerHTML += this.textContent;
}

function readingTime() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes();
    // making the clock display every time two digits "00:00"
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    let currentTime = `${hours}:${minutes}`;
    return currentTime;
}

const listOfCalls = document.querySelector('.list-of-calls');

function renderingListOfCalls(data) {
    const listOfCallsData = JSON.parse(localStorage.getItem("data"));
    if(listOfCallsData) {
        const rendered = listOfCallsData.map((caller) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const span = document.createElement("span");
        const phoneNumber = document.createTextNode(`${caller.phonenumber}`);
        const callTime = document.createTextNode(`${caller.time}`);

        h3.appendChild(phoneNumber);
        span.appendChild(callTime);
        div.appendChild(h3);
        div.appendChild(span);
        div.classList.add('list-item');
        listOfCalls.appendChild(div);
    })
}
}
renderingListOfCalls();

// making the calls save in the localstorage

const data = []

function renderingListOfCallsOnClick() {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const phoneNumber = document.createTextNode(currentNumber.textContent);
    const callTime = document.createTextNode(readingTime());

    h3.appendChild(phoneNumber);
    span.appendChild(callTime);
    div.appendChild(h3);
    div.appendChild(span);
    div.classList.add('list-item');
    listOfCalls.prepend(div);

    currentNumber.innerHTML = '';
}

telephoneSvg.addEventListener('click', () => {
    let localStorageData = JSON.parse(localStorage.getItem("data"));
    if(currentNumber.textContent != '') {
        if(data.length == 0 && localStorageData != null) {
            data.unshift({phonenumber: currentNumber.textContent, time: readingTime()}, ...localStorageData);
            renderingListOfCallsOnClick();
        } else {
            data.unshift({phonenumber: currentNumber.textContent, time: readingTime()});
            renderingListOfCallsOnClick();
        }
    }
    localStorage.setItem("data", JSON.stringify(data));
})



numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));

const latestCallsLink = document.querySelector('.latest-calls-link');

const bottomSideLatestCalls = document.querySelector('.bottom-side-latest-calls');
const numbersLink = bottomSideLatestCalls.querySelector('.numbers-link');

const bottomSide = document.querySelector('.bottom-side');
const telephonePanel = document.querySelector('.telephone-panel');
const numbers = document.querySelector('.numbers');

const titleAndInput = document.querySelector('.title-and-input');

latestCallsLink.addEventListener("click", () => {
    
    telephonePanel.classList.add('disabled');
    bottomSideLatestCalls.classList.add('active');
    bottomSide.classList.add('disabled');

    numbers.classList.add('disabled');
    listOfCalls.classList.remove('disabled');
    titleAndInput.classList.remove('disabled');


})

numbersLink.addEventListener("click", () => {
    telephonePanel.classList.remove('disabled');
    bottomSideLatestCalls.classList.remove('active');
    bottomSide.classList.remove('disabled');
    numbers.classList.remove('disabled');
    listOfCalls.classList.add('disabled');
    titleAndInput.classList.add('disabled');
})


// making input search

const searchInput = document.querySelector('.input-search');

searchInput.addEventListener('input', (e) => {
    const listItem = listOfCalls.querySelectorAll('.list-item');
    listItem.forEach((item) => {
        const phoneNumber = item.querySelector('h3').textContent;
        if(phoneNumber.includes(e.target.value)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
    )
})