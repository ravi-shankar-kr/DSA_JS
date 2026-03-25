// Q34. Separate each digit of a number and print it on a new line (Ex: 123 → 3, 2, 1)
// 👉 Topic: Number Manipulation
// 👉 Level: Easy


 let n = 123;
 let result = ""

while (n > 0) {
    let digit = n % 10;    
    result +=  digit + ","
    n = Math.floor(n / 10);  
}

console.log(result);
