// Q36. Accept a number and print its reverse
// 👉 Topic: Number Reverse
// 👉 Level: Easy

let n = 101;
let result = 0;

while (n > 0) {
    let digit = n%10
    result = result * 10 + digit
    n = Math.floor(n/10)
    
}
console.log(result);
