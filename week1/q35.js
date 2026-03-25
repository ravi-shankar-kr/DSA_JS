// Q35. Sum of digits of a number (Ex: 936 = 18)
// 👉 Topic: Number Logic
// 👉 Level: Easy

let n = 936;
sum = 0

while (n > 0) {
    let digit = n % 10
    sum += digit;
    n = Math.floor(n/10)
}

console.log(sum);
