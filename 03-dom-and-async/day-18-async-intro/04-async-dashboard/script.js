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

tombolReset.addEventListener('click', function() {
    clearInterval(intervalId);
    stopwatchDisplay.innerText = 0;
});

// --- FITUR BARU SOAL 4 (ASYNC DASHBOARD) ---
const tombolLoad = document.getElementById('btn-load');
const dataContainer = document.getElementById('data-container');

tombolLoad.addEventListener('click', function() {
    this.innerText = "Loading...";
    this.disabled = true;
    
    setTimeout(function() {
        tombolLoad.innerText = "Selesai!";
        tombolLoad.disabled = false;
        dataContainer.innerText = "Sukses! 5 data baru telah diterima.";
    }, 2000);

    // setTimeout(() => { // Pakai tanda panah
    //     this.innerText = "Selesai!"; // Sekarang 'this' tetap Si Tombol!
    //     this.disabled = false;
    //     dataContainer.innerText = "Sukses! 5 data baru telah diterima.";
    // }, 2000);
});
