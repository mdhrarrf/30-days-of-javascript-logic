const message = document.getElementById('message');

let detik = 0;
const waktu = setInterval(function() {
    detik++;
    message.innerText = `Detik ke-${detik}`;

    if (detik === 3) {
        clearInterval(waktu);
        message.innerText = "Halo! Maaf saya telat muncul.";
    }
}, 1000);

const display = document.getElementById('display');

const jam = setInterval(function() {
    detik++;
    let time = new Date().toLocaleTimeString();
    display.innerText = time;
}, 1000);
