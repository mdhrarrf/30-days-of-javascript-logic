// SOAL 1
const tombolSimpan = document.getElementById('btn-simpan');
const inputNama = document.getElementById('input-nama');
const greeting = document.getElementById('greeting');

tombolSimpan.addEventListener('click', function() {
    localStorage.setItem('namaUser', 'input-nama');

    greeting.innerText = `Halo! ${inputNama.value}`;
});
