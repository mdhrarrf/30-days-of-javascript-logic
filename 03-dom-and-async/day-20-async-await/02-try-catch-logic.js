function cekKoneksi(sinyal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sinyal === true) {
                resolve("Koneksi internet bagus");
            } else {
                reject("Koneksi internet terputus");
            }
        }, 2000);
    });
};

async function aksesBrowser(sinyal) {
    try {
        const hasil = await cekKoneksi(sinyal);
        console.log(hasil);
    } catch (error) {
        console.log(`Waduh ada masalah ${error}`);
    }
};

aksesBrowser(false);