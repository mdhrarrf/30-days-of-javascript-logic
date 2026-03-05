let angka = 0;

while (true) {
    angka = Math.floor(Math.random() * 10) + 1;
    console.log("Angka Dadu: ", angka);
    if (angka === 7) {
        console.log("Ini Angka: 7")
        break;
    }
}