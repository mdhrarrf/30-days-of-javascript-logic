for (let i = 1; i <= 3; i++) {
    let baris = ""; 

    for (let j = 1; j <= 3; j++) {
        baris+= (`[${i}, ${j}] `);
    }

    console.log(baris);
}