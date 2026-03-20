function pesanMakanan() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Makanan telah dipesan!");
        }, 2000);
    });
};

function masakMakanan(statusPesan) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${statusPesan} Sekarang sedang dimasak...`);
        }, 3000);
    });
};

pesanMakanan()
    .then(hasil1 => {
        console.log(hasil1);
        return masakMakanan(hasil1);
    })
    .then(hasil2 => {
        console.log(hasil2);
        console.log("Selesai! Selamat Makan.");
    });