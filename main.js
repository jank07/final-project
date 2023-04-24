const topBarTimeSpan = document.querySelector('.top-bar-time span')

function readingTime() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes();
// making the clock display every time two digits "00:00"
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    let currentTime = `${hours}:${minutes}`;
    topBarTimeSpan.innerHTML = currentTime;
}
setInterval(readingTime, 1000);
