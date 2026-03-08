let nilai = [80, 75, 90, 85, 70];
let total = 0

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i]
    console.log(nilai[i]);
}

console.log(`Total: ${total}`);
console.log(`Rata-rata: ${total / nilai.length}`);