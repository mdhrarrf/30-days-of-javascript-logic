const greeting = document.getElementById('greeting');
const inputNama = document.getElementById('input-nama');
const tombolSimpan = document.getElementById('btn-simpan');

// Cek ingatan saat refresh
const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    greeting.innerText = `Halo lagi, ${namaTersimpan}!`;
}

// Aksi simpan
tombolSimpan.addEventListener('click', function () {
    const namaBaru = inputNama.value;
    localStorage.setItem('namaUser', namaBaru);
    greeting.innerText = `Halo ${namaBaru}`;
});