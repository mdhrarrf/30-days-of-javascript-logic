// --- SOAL 1:  ---
const inputNama = document.getElementById('input-nama');
const greeting = document.getElementById('greeting');

inputNama.addEventListener('input', function() {
    greeting.innerText = `Halo ${inputNama.value}!`;
});

// inputNama.addEventListener('input', function () {
//     greeting.innerText = `Halo ${this.value}!`;
// });
