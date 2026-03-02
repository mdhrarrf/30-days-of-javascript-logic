// ISI FILE INI:
let kardusA = "Buku";
let kardusB = "Baju";

console.log("Sebelum ditukar:");
console.log("Kardus A:", kardusA);
console.log("Kardus B:", kardusB);

// --- TULIS LOGIKA PENUKARAN DI SINI ---
// (Gunakan variabel bantuan/temporary)
let temp = kardusA
kardusA = kardusB
kardusB = temp

console.log("Setelah ditukar:");
console.log("Kardus A:", kardusA);
console.log("Kardus B:", kardusB);