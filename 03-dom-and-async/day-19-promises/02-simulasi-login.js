function loginUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin") {
                resolve("Selamat datang, Admin!")
            } else {
                reject("Username salah, akses ditolak!")
            }
        }, 2000);
    });
};

loginUser("admin")
    .then(benar => console.log(benar))
    .catch(salah => console.log(salah));
