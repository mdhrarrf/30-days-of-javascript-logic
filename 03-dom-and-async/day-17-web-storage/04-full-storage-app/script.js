// --- 1. TANGKAP SEMUA ELEMEN (SOAL 1, 3, 4) ---
const greeting = document.getElementById('greeting');
const inputNama = document.getElementById('input-nama');
const tombolSimpan = document.getElementById('btn-simpan');
const tombolHapus = document.getElementById('btn-hapus');
const tombolTema = document.getElementById('btn-tema'); // Elemen Soal 4

// --- 2. CEK INGATAN SAAT REFRESH (SOAL 2 & 4) ---

// Cek Ingatan Nama (Soal 2)
const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    greeting.innerText = `Halo lagi, ${namaTersimpan}!`;
}

// Cek Ingatan Tema (Soal 4)
const temaTersimpan = localStorage.getItem('tema');
if (temaTersimpan === 'dark') {
    document.body.classList.add('dark');
}

// --- 3. EVENT SIMPAN NAMA (SOAL 1) ---
tombolSimpan.addEventListener('click', function () {
    const namaBaru = inputNama.value;
    if (namaBaru) {
        localStorage.setItem('namaUser', namaBaru);
        greeting.innerText = `Halo ${namaBaru}`;
    }
});

// --- 4. EVENT HAPUS NAMA (SOAL 3) ---
tombolHapus.addEventListener('click', function () {
    localStorage.removeItem('namaUser');
    greeting.innerText = 'Halo, orang asing! (Memori dihapus)';
    inputNama.value = '';
});

// --- 5. FITUR BARU: EVENT TEMA ABADI (SOAL 4) ---
tombolTema.addEventListener('click', function () {
    // Ganti tampilan secara visual (Toggle)
    document.body.classList.toggle('dark');

    // Simpan status tema ke LocalStorage agar abadi saat refresh
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
});