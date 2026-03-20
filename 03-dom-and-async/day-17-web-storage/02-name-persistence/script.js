// --- FITUR SOAL 1 (TANGKAP ELEMEN) ---
const greeting = document.getElementById('greeting');
const inputNama = document.getElementById('input-nama');
const tombolSimpan = document.getElementById('btn-simpan');

// --- FITUR BARU SOAL 2 (CEK INGATAN / REFRESH) ---
// Logika ini berjalan otomatis saat halaman dibuka
const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    greeting.innerText = `Halo lagi, ${namaTersimpan}!`;
}

// --- LANJUTAN FITUR SOAL 1 (EVENT SIMPAN) ---
tombolSimpan.addEventListener('click', function () {
    const namaBaru = inputNama.value;

    if (namaBaru) {
        localStorage.setItem('namaUser', namaBaru);
        greeting.innerText = `Halo ${namaBaru}`;
    }
});