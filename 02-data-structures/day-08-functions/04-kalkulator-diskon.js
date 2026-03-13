function hitungHargaDiskon(hargaAsli, persenDiskon) {
    let potongan = (persenDiskon / 100) * hargaAsli;

    return hargaAsli - potongan;
}

let hargaAsli = 10000;
let persenDiskon = 20;

let hitungHarga = hitungHargaDiskon(hargaAsli, persenDiskon);
console.log(hitungHarga);