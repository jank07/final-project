const numberButtons = document.querySelectorAll('button');
const currentNumber = document.querySelector('.current-number')
const telephoneSvg = document.querySelector('.telephone-svg')

function displayNumbers() {
    console.log(this.textContent);
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

// making the calls save in the localstorage

const data = []

telephoneSvg.addEventListener('click', () => {
    let localStorageData = JSON.parse(localStorage.getItem("data"));
    console.log(data.length)
    if(currentNumber.textContent) {
        if(data.length == 0 && localStorageData != null) {
            data.unshift({phonenumber: currentNumber.textContent, time: readingTime()}, ...localStorageData);
            // localStorageData.unshift({phonenumber: currentNumber.textContent, time: readingTime()});
        } else {
            data.unshift({phonenumber: currentNumber.textContent, time: readingTime()});
        }
    }
    localStorage.setItem("data", JSON.stringify(data));
})



numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));