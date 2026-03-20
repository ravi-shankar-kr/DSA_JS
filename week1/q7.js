// Q7 – Accept the length and width of a rectangle. Calculate & print the area and perimeter
// Difficulty: Easy | Topic: MATH_CLASS

let length = Number(prompt("Enter length: "))
let width = Number(prompt("Enter width: "))

let perimeter = ( length + width)*2;
let area = (length*width)

console.log(`area: ${area},  perimeter: ${perimeter}`);
