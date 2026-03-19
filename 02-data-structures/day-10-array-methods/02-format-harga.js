const harga = [10000, 25000, 50000];
const hargaRupiah = harga.map(function (h) {
    return "Rp" + h;
});

// const hargaRupiah = harga.map(h => `Rp${h}`);

console.log(hargaRupiah);