// Q33. Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex: a = 2, b = 5 → 2^5 = 32)
// 👉 Topic: Math, Loops / Power
// 👉 Level: Medium

let a = Number(prompt("Enter first num: "))
let b = Number(prompt("Enter second num: "))

let power = Math.pow(a, b);
console.log(power);
