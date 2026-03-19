let databaseBarang = [
    { id: 1, nama: "Laptop Gaming", harga: 15000000, stok: 5 },
    { id: 2, nama: "Mouse Wireless", harga: 300000, stok: 10 },
    { id: 3, nama: "Keyboard Mechanical", harga: 800000, stok: 3 },
    { id: 4, nama: "Monitor 24 Inch", harga: 2000000, stok: 7 }
];

function cariBarang(id) {
    let barang = databaseBarang.find(barang => barang.id === id);
    return barang;
}

function beliBarang(id, jumlahBeli) {
    let barang = cariBarang(id);
    if (!barang) return "Barang tidak ditemukan!";
    
    if (barang.stok >= jumlahBeli) {
        barang.stok -= jumlahBeli;

        return {
            nama: barang.nama,
            jumlahBeli: jumlahBeli,
            totalHarga: barang.harga * jumlahBeli
        }
    } else {
        return "Stok tidak mencukupi!";
    }
}

function cetakStruk(hasilBeli) {
    // Jika hasilBeli bukan objek (tapi string error), jangan paksa destructuring
    if (typeof hasilBeli === "string") {
        console.log("----------------------------");
        console.log("GAGAL: " + hasilBeli);
        console.log("----------------------------");
        return; // Berhenti di sini
    }
    
    const { nama, jumlahBeli, totalHarga } = hasilBeli;

    const template = `
        <div>
            <h1>Nama: ${nama}</h1>
            <p>Jumlah Beli: ${jumlahBeli}</p>
            <p>Total Harga: Rp${totalHarga}</p>
        </div>
    `;

    console.log(template);
}


const transaksi1 = beliBarang(99, 2); // Beli Laptop 2 unit
cetakStruk(transaksi1);

// Cek apakah stok di databaseBarang ikut berkurang?
console.log(databaseBarang);