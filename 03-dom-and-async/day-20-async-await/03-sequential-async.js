function ambilDataUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data User: Almer");
        }, 1000);
    });
};

function ambilPostingan(namaUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Postingan milik " + namaUser);
        }, 1000);
    });
};

function tampilkanKeLayar(postingan) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Berhasil menampilkan: " + postingan);
        }, 1000);
    });
};

async function jalankanAplikasi() {
    console.log("Mulai...");
    const user = await ambilDataUser();
    const postingan = await ambilPostingan(user);
    const status = await tampilkanKeLayar(postingan);
    console.log("SELESAI: " + status);
};

jalankanAplikasi();