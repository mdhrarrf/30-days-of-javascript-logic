// --- DARI SOAL 1 & 2 (ELEMEN & INGATAN) ---
const greeting = document.getElementById('greeting');
const inputNama = document.getElementById('input-nama');
const tombolSimpan = document.getElementById('btn-simpan');
const tombolHapus = document.getElementById('btn-hapus'); // Tambah elemen baru

const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    greeting.innerText = `Halo lagi, ${namaTersimpan}!`;
}

// --- DARI SOAL 1 (EVENT SIMPAN) ---
tombolSimpan.addEventListener('click', function () {
    const namaBaru = inputNama.value;
    if (namaBaru) {
        localStorage.setItem('namaUser', namaBaru);
        greeting.innerText = `Halo ${namaBaru}`;
    }
});

// --- FITUR BARU SOAL 3 (EVENT HAPUS) ---
tombolHapus.addEventListener('click', function () {
    // Hapus data dari laci LocalStorage
    localStorage.removeItem('namaUser');

    // Kembalikan tampilan ke awal
    greeting.innerText = 'Halo, orang asing! (Memori dihapus)';
    inputNama.value = ''; // Opsional: Kosongkan kotak input juga
});