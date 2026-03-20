const message = document.getElementById('message');

// Gunakan setTimeout karena tugasnya cuma SEKALI (delay)
setTimeout(function () {
    message.innerText = "Halo! Maaf saya telat muncul.";
}, 3000); // Tunggu 3 detik, lalu jalankan.