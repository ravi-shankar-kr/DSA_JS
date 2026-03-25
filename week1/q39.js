// Q39. Automorphic number
// 👉 Topic: Number Logic
// 👉 Level: Medium


let n = 10;

let pow = Math.pow(n, 2)
let digit = pow%10

if (n == digit) {
    console.log("Automorphic numner");
    
} else{
   console.log( "not Automorphic numner ");
   
}
