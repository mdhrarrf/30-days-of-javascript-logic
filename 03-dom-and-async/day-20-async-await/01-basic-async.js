function pesanKopi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ini Pesanan Kopi mu~');
        }, 2000);
    });
};

async function pelayan() {
    console.log("Pesananmu sedang disiapkan!");

    const kopi = await pesanKopi();

    console.log(`Pelayan: ${kopi} diantarkan`);
}

pelayan();