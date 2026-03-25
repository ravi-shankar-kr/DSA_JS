// Q31. Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)
// 👉 Topic: Loops, Factors
// 👉 Level: Medium

let n = 20;
let factorSum = 0;

for (let i = 0; i <= n; i++) {
    if ( n%i == 0) {
        console.log(i);
        factorSum = factorSum + i;
    }   
}

console.log(factorSum);
