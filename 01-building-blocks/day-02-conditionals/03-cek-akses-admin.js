const role = "karyawan";
const punyaIzinAkses = false;

// TULIS LOGIKA IF ELSE DI SINI
if (role === "admin" || punyaIzinAkses) {
    console.log("Anda memiliki izin.")
} else {
    console.log("Anda tidak memiliki izin.")
}