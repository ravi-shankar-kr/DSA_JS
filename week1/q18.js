// Q18 – Accept three numbers and print the greatest among them
// Difficulty: Medium | Topic: IF_ELSE

let a =Number(prompt("Enter first num: "))
let b = Number(prompt("Enter second num: "))
let c =Number(prompt("Enter third num: "))

if (a>b && a> c) {
    console.log(a);
    
} if (b>a && b> c) {
    console.log(b);
    
} if(c>a && c>b){
    console.log(c);
    
}