for (let i = 1; i <= 10; i++) {
    let baris = "";

    for (let j = 1; j <= 10; j++) {
        baris += (i * j) + " ";
    }

    console.log(`Perkalian ${i}: ${baris}`);
}