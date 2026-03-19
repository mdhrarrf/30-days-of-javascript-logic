const daftarSiswa = [
    { id: 1, nama: "Haidar", skor: 95, status: "Aktif" },
    { id: 2, nama: "Budi", skor: 70, status: "Aktif" },
    { id: 3, nama: "Siti", skor: 85, status: "Non-Aktif" },
    { id: 4, nama: "Andi", skor: 60, status: "Aktif" }
];

const updatedSiswa = daftarSiswa.map(siswa => {
    if (siswa.status === "Aktif") {
        return {
            ...siswa,
            skor: siswa.skor + 5
        };
    } else {
        return siswa;
    }
});

console.log(updatedSiswa);