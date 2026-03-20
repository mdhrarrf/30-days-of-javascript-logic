// --- SOAL 1:  ---
const inputNama = document.getElementById('input-nama');
const greeting = document.getElementById('greeting');

inputNama.addEventListener('input', function() {
    greeting.innerText = `Halo ${inputNama.value}!`;
});

// inputNama.addEventListener('input', function () {
//     greeting.innerText = `Halo ${this.value}!`;
// });

// --- SOAL 2:  ---
const tombolTema = document.getElementById('btn-ubah-warna');

tombolTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})

// --- SOAL 3:  ---
const buttonTambah = document.getElementById('btn-tambah');
const counter = document.getElementById('counter');

let angka = 0;
buttonTambah.addEventListener('click', function() {
    angka++; // Tambah dulu
    counter.innerText = angka; // Baru tampilkan

    // --- SOAL 4:  ---
    if (angka === 11 ) {
        alert("Target tercapai!");
        counter.style.color = "red";
    }
});
