// --- SOAL 1: Ganti Teks ---
const judul = document.getElementById('main-title');

judul.innerText = "Halo Dunia";

// --- SOAL 2: Ganti Gaya (Style) ---
const kotak = document.getElementById('box');

kotak.style.backgroundColor = "royalblue";
kotak.style.height = "200px";
kotak.style.width = "200px";

// --- SOAL 3: Tambah HTML ---
const deskripsi = document.querySelector('.description');

deskripsi.innerHTML = "Teks ini <u>sudah diganti</u> lewat JavaScript!";

// --- SOAL 4: Manipulasi Data Objek (Challenge!) ---
const user = {
    nama: "Haidar",
    status: "Pro"
};

judul.innerHTML = `Selamat Datang ${user.nama}`;

if (user.status === "Pro") {
    judul.style.color = "green";
}