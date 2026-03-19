// Perbaiki struktur kode ini
if (true) {
    let status = "Belajar JS";
    console.log(status);
}

let status; // Deklarasi di luar (Global/Parent)

if (true) {
    status = "Belajar JS"; // Isi nilainya di dalam
}

console.log(status); // Sekarang bisa diakses di luar!