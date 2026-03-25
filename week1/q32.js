// Q32. Check if the number is Prime or not.
// 👉 Topic: Prime Number, Loops
// 👉 Level: Easy

let n = 10;
isPrime = true

for (let i = 2; i <= Math.sqrt(n); i++) {
     if (n%i === 0) {
        isPrime = false;
        break
    } 
    
}

if (isPrime ) {
    console.log("prime");
    
}else{
    console.log("not prime");
    
}
