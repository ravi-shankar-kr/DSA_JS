// Q38. Accept a number and check if it is a strong number or not
// 👉 Topic: Factorial, Number Logic
// 👉 Level: Medium

 let n = 11;
let original = n;
let strongNum = 0;

while (n > 0) {
    let digit = n % 10;

    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }
    console.log(fact);

    strongNum = strongNum + fact;
    n = Math.floor(n / 10);
}


if (strongNum === original) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}