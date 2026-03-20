function loginUser(username) {
    return new Promise((resolve, reject) => {
        // Berikan delay 2 detik sesuai permintaan
        setTimeout(() => {
            if (username === "admin") {
                resolve("✅ Login Berhasil! Selamat Datang.");
            } else {
                reject("❌ Login Gagal! Username Salah.");
            }
        }, 2000);
    });
};

const loginStatus = document.getElementById('login-status');
const tombolLogin = document.getElementById('btn-login');

tombolLogin.addEventListener('click', function() {
    loginStatus.innerHTML = "⏳ Mengecek kredensial...";
    loginStatus.style.color = "gray";
    this.disabled = true;

    loginUser("admin")
        .then((pesanSukses) => {
            loginStatus.innerText = pesanSukses;
            loginStatus.style.color = "green";
        })
        .catch((pesanGagal) => {
            loginStatus.innerText = pesanGagal;
            loginStatus.style.color = "red";
        })
        .finally(() => {
            this.disabled = false;
        });
});
