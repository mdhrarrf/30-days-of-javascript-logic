const belanjaan = [5000, 15000, 3000, 20000, 4500];
const hasil = belanjaan
    .filter(h => h > 10000)
    .map(h => h * 0.9);

console.log(hasil);