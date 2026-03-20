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
