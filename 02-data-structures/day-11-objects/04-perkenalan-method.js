const orang = {
    nama : "Muhammad Haidar Almer Rafif",
    sapa : function() {
        let sapaan = `Halo, nama saya adalah ${this.nama}`;
        return sapaan;
    }
}

let sapaan = orang.sapa();
console.log(sapaan);