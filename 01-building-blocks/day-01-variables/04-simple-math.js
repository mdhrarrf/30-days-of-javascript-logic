let hargaBarang = 100000;
let diskonPersen = 20;

let totalDiskon = (diskonPersen / 100) * hargaBarang;

let hargaAkhir = hargaBarang - totalDiskon;

console.log(`Harga Akhir: Rp${hargaAkhir}`);