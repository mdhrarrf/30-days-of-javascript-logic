// 1. TANGKAP SEMUA ELEMEN
const greeting = document.getElementById('greeting');
const inputNama = document.getElementById('input-nama');
const tombolSimpan = document.getElementById('btn-simpan');

// 2. CEK INGATAN (SOAL 2)
const namaTersimpan = localStorage.getItem('namaUser');
if (namaTersimpan) {
    greeting.innerText = `Halo lagi, ${namaTersimpan}!`;
}

const temaTersimpan = localStorage.getItem('tema');
if (temaTersimpan === 'dark') {
    document.body.classList.add('dark')
}

// 3. EVENT SIMPAN (SOAL 1)
tombolSimpan.addEventListener('click', function () {
    const namaBaru = inputNama.value;
    
    localStorage.setItem('namaUser', namaBaru);

    greeting.innerText = `Halo ${namaBaru}`;
});

const tombolHapus = document.getElementById('btn-hapus');

tombolHapus.addEventListener('click', function() {
    localStorage.removeItem('namaUser');

    greeting.innerText = 'Halo, orang asing!';
});

const tombolTema = document.getElementById('btn-tema');

tombolTema.addEventListener('click', function () {
    // 1. Ganti tampilan (Toggle)
    document.body.classList.toggle('dark');

    // 2. Cek apakah sekarang posisinya gelap atau terang?
    if (document.body.classList.contains('dark')) {
        // 3. Simpan status barunya ke laci
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
});