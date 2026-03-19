const daftarSiswa = [
    { id: 1, nama: "Haidar", skor: 95, status: "Aktif" },
    { id: 2, nama: "Budi", skor: 70, status: "Aktif" },
    { id: 3, nama: "Siti", skor: 85, status: "Non-Aktif" },
    { id: 4, nama: "Andi", skor: 60, status: "Aktif" }
];

daftarSiswa.forEach(function(siswa) {
    console.log(`Siswa bernama ${siswa.nama} memiliki skor ${siswa.skor}`);
});