const minutesCron = document.querySelector(".minutes")
const secondsCron = document.querySelector(".seconds")
const milliSeconds = document.querySelector(".mili-seconds")

const buttonStart = document.querySelector(".button-start")
const buttonPause = document.querySelector(".button-pause")
const buttonContinue = document.querySelector(".button-continue")
const buttonReset = document.querySelector(".button-reset")

let cron
let minutes = 0
let seconds = 0
let milliSecond = 0
let isPaused = false


function startTimer() {

    cron = setInterval(() => {

        if (!isPaused) {
            milliSecond += 10

            if (milliSecond === 1000) {
                seconds++;
                milliSecond = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesCron.textContent = formatTimer(minutes);
            secondsCron.textContent = formatTimer(seconds);
            milliSeconds.textContent = formatMilliSeconds(milliSecond);
        }

    }, 10)

    buttonStart.style.display = "none";
    buttonPause.style.display = "block";

}

function pauseTimer() {
    isPaused = true
    buttonPause.style.display = "none"
    buttonContinue.style.display = "block"
}

function resumeTimer() {
    isPaused = false
    buttonPause.style.display = "block"
    buttonContinue.style.display = "none"
}

function resetTimer() {

    clearInterval(cron);
    minutes = 0;
    seconds = 0;
    milliSecond = 0;

    minutesCron.textContent = "00"
    secondsCron.textContent = "00"
    milliSeconds.textContent = "000"

    buttonStart.style.display = "block";
    buttonPause.style.display = "none";
    buttonContinue.style.display = "none";
}

function formatTimer(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliSeconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

buttonStart.addEventListener("click", startTimer)
buttonPause.addEventListener("click", pauseTimer)
buttonContinue.addEventListener("click", resumeTimer)
buttonReset.addEventListener("click", resetTimer)