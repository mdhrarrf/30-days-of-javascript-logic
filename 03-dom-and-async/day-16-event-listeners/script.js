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