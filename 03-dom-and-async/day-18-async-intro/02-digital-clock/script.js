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