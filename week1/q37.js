// Q37. Accept a number and check if it is a palindromic number
// 👉 Topic: Palindrome
// 👉 Level: Easy

let n = 101;
let original = n;
let reverse = 0;
 

while (n > 0) {
    let digit = n%10;
    reverse = reverse * 10 + digit
    n = Math.floor(n/10)
   
}
if ( original == reverse ) {
    console.log("Number is palindrome");
    
} else{
    console.log("Number is not palindrome");
    
}




