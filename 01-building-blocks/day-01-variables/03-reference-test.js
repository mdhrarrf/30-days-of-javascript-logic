let akun1 = { nama: "Siswa", level: 1 };
let akun2 = akun1;
akun2.level = 2;

console.log("Level Akun 1:", akun1.level);
console.log("Level Akun 2:", akun2.level);

// Jawab:
// Menurutmu, apa isi akun1.level sekarang? (1 atau 2?): Level 2
// Alasannya: Karena variable akun1.level variable levelnya akan memanggil akun2.level = 2;.