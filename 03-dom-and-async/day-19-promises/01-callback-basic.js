function itung(a, b, callback) {
    console.log(`Penjumlahan ${a} + ${b}`);

    callback(`Hasil = ${a + b}`);
}

itung(10, 5, function(hasil) {
    console.log(hasil);
});