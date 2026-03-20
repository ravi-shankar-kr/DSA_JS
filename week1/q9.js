// Q9 – Accept the three sides of triangle and calculate the area using Heron's formula
// Difficulty: Medium | Topic: MATH_CLASS

let a = Number(prompt("enter the let of first side: "))
let b = Number(prompt("enter the let of second side: "))
let c = Number(prompt("enter the let of third side: "))

let s = (a+b+c)/2;
console.log(s);


let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(area);
