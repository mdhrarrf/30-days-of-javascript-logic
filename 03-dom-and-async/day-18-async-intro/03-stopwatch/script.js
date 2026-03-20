// --- FITUR SOAL 1 (DELAY) ---
const message = document.getElementById('message');
setTimeout(function () {
    message.innerText = "Halo! Maaf saya telat muncul.";
}, 3000);

// --- FITUR BARU SOAL 2 (JAM DIGITAL) ---
const display = document.getElementById('display');

setInterval(function () {
    let time = new Date().toLocaleTimeString();
    display.innerText = `Jam Sekarang: ${time}`;
}, 1000); // Berulang tiap 1 detik

// --- FITUR BARU SOAL 3 (STOPWATCH) ---
let counter = 0;
let intervalId;

const tombolMulai = document.getElementById('btn-start');
const tombolBerhenti = document.getElementById('btn-stop');
const stopwatchDisplay = document.getElementById('stopwatch');
const tombolReset = document.getElementById('btn-reset');

tombolMulai.addEventListener('click', function() {
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        counter++;
        stopwatchDisplay.innerText = counter;
    }, 1000);
});

tombolBerhenti.addEventListener('click', function() {
    clearInterval(intervalId);
});

tombolReset.addEventListener('click', function () {
    clearInterval(intervalId);
    stopwatchDisplay.innerText = 0;
});