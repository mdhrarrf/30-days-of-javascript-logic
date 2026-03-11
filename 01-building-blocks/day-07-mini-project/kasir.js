// 1. DATA TOKO
const daftarBarang = ["Buku", "Pensil", "Penggaris", "Penghapus"];
const daftarHarga = [5000, 2000, 3000, 1000];

// 2. LOGIKA HITUNG TOTAL (Gunakan Loop)
let total = 0;
for (let i = 0; i < daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
    console.log(daftarHarga[i]);

    total = total + daftarHarga[i];
}

// 3. LOGIKA DISKON (Gunakan If Else)
let diskon = 0;
if (total > 10000) {
    diskon = total * 0.1;
}

let totalAkhir = total - diskon

// 4. TAMPILKAN STRUK BELANJA
console.log("=== STRUK BELANJA ===");
console.log(`Total Awal  : Rp${total}`);
console.log(`Diskon (10%): Rp${diskon}`);
console.log(`Total Akhir : Rp${total - diskon}`);

// 5. FITUR PENCARIAN (Gunakan Loop + If)
let cari = "Penggaris";
let ditemukan = false;
let hargaDitemukan = 0;
console.log(`\nMencari barang: ${cari}`);

for (let i = 0; i < daftarBarang.length; i++) {
    if (daftarBarang[i] === cari) {
        ditemukan = true;
        hargaDitemukan = daftarHarga[i];
        break;
    }
}

if (ditemukan) {
    console.log("Barang: " + cari);
    console.log("Harga: Rp" + hargaDitemukan);
} else {
    console.log("Barang Tidak Ditemukan!")
}