let timeLeft = 10;
let clickCount = 0;
let timerInterval;
const timerElement = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const startButton = document.getElementById('start');
const resultElement = document.getElementById('result');

function updateTimer() {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        clickButton.disabled = true;
        resultElement.textContent = `You clicked ${clickCount} times!`;
        resultElement.style.display = 'block';
    }
}

function Start() {
    startButton.style.display = "none";
    clickButton.style.display = "block";
    timerInterval = setInterval(updateTimer, 1000);
}

function countClick() {
    clickCount++;
}