// Q21 – Bijli Bill
// Difficulty: Medium | Topic: IF_ELSE

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + (units - 100) * 7;
} else if (units <= 300) {
    bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
} else {
    bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
}

console.log(`Total bill: ₹${bill}`);