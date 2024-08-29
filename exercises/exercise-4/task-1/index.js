// => time & date
let date = document.querySelector("#date");
let time = document.querySelector("#time");

function settingTime() {
    let todayDate = new Date();

    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    let seconds = todayDate.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    time.textContent = `${hours}-${minutes}-${seconds}`;
}

let setTimer = setInterval(settingTime, 1000);

function settingDate() {
    let todayDate = new Date();
    let dateString = `${todayDate.getDate()}-${todayDate.getMonth() + 1}-${todayDate.getFullYear()}`;
    date.textContent = dateString;
}
settingDate();

// => buttons
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resumeButton = document.getElementById("resume");
let resetButton = document.getElementById("reset");

// => stopwatch
let display = document.querySelector("#display");
let timer = null;
let startTime = 0;
let endTime = 0;
let isRunning = false;
let isStopped = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - endTime;
        timer = setInterval(update, 10);
        isRunning = true;
        isStopped = false;

        startButton.disabled = true;
        stopButton.disabled = false;
        resumeButton.disabled = true;
        resetButton.disabled = false;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        endTime = Date.now() - startTime;
        isRunning = false;
        isStopped = true;

        startButton.disabled = true;
        stopButton.disabled = true;
        resumeButton.disabled = false;
        resetButton.disabled = false;
    }
}

function resume() {
    if (isStopped) {
        startTime = Date.now() - endTime;
        timer = setInterval(update, 10);
        isRunning = true;
        isStopped = false;

        startButton.disabled = true;
        stopButton.disabled = false;
        resumeButton.disabled = true;
        resetButton.disabled = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    endTime = 0;
    isRunning = false;
    isStopped = false;
    display.textContent = "00:00:00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resumeButton.disabled = true;
    resetButton.disabled = true;
}

function update() {
    let currentTime = Date.now();
    endTime = currentTime - startTime;

    let hours = Math.floor(endTime / (1000 * 60 * 60));
    let minutes = Math.floor(endTime / (1000 * 60) % 60);
    let seconds = Math.floor(endTime / 1000 % 60);
    let milliseconds = Math.floor(endTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resumeButton.addEventListener("click", resume);
resetButton.addEventListener("click", reset);

// resetButton.disabled = true;
// stopButton.disabled = true;
// resumeButton.disabled = true;