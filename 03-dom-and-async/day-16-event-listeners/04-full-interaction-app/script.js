// --- 1. SELECTION ---
const inputNama = document.getElementById('input-nama');
const greeting = document.getElementById('greeting');
const tombolTema = document.getElementById('btn-ubah-warna');
const buttonTambah = document.getElementById('btn-tambah');
const counter = document.getElementById('counter');

// --- 2. FITUR SOAL 1 (MIRROR) ---
inputNama.addEventListener('input', function () {
    greeting.innerText = `Halo ${this.value}!`;
});

// --- 3. FITUR SOAL 2 (DARK MODE) ---
tombolTema.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// --- 4. FITUR SOAL 3 & 4 (COUNTER DENGAN TARGET) ---
let angka = 0;
buttonTambah.addEventListener('click', function () {
    angka++;
    counter.innerText = angka;

    // --- LOGIKA SOAL 4 (PERBAIKAN TARGET KE 10) ---
    if (angka === 10) {
        alert("Target 10 tercapai!");
        counter.style.color = "red";
        counter.style.fontWeight = "bold"; // Tambahan biar makin keren
    }
});