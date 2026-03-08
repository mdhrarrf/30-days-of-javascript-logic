for (let i = 1; i <= 4; i++) {
    let baris = "";

    for (let j = 1; j <= 4; j++) {
        if ((i + j) % 2 === 0) {
            baris += "0 ";
        } else {
            baris += "1 ";
        }
    }
    
    console.log(baris);
}