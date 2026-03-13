function isGenap(angka) {
    return angka % 2 === 0;
}

let angkaUji = 11;
let hasilCek = isGenap(angkaUji);

console.log(`Apakah ${angkaUji} genap? ${hasilCek}`);

if (hasilCek) {
    console.log("Ini angka Genap");
} else {
    console.log("Ini bukan angka genap");
}