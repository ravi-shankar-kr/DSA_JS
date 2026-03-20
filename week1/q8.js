// Q8 – Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
// Difficulty: Medium | Topic: MATH_CLASS

let principle = Number(prompt("Enter principle Amout: "));
let duration = Number(prompt("Enter duration: "))
let rate = 10/100;

let compoundIntrest = principle *  Math.pow((1+rate),duration)
console.log(compoundIntrest);

